define([
	'dojo/_base/declare',
	'TechDoc/Aras/Client/Controls/TechDoc/Action/AddElementAction',
	'TechDoc/Aras/Client/Controls/TechDoc/ViewModel/DocumentationEnums'
],
function(declare, AddElementAction, Enums) {
	return declare('Aras.Client.Controls.MPP.Action.AddElementAction', AddElementAction, {
		Execute: function(/*Object*/args) {

			var contextObject = args.context;
			var direction = args.direction;
			var newElementName = args.elementName;
			var newElement = null;
			var schemaHelper = this._viewmodel.Schema();

			if (newElementName == 'External Content') {
				var searchNames = [];
				var expectedElements = schemaHelper.GetExpectedElements(contextObject);

				switch (direction) {
					case 'append':
						searchNames = expectedElements.append;
						break;
					case 'insert':
						searchNames = expectedElements.insert;
						break;
				}

				this._SearchBlock(searchNames,
					function(/*Array*/ selectedBlockIds) {
						if (selectedBlockIds && selectedBlockIds.length)  {
							var blockId;
							var i;

							for (i = 0; i < selectedBlockIds.length; i++) {
								blockId = selectedBlockIds[i];
								newElement = this._GetArasBlockElement(blockId);

								if (newElement) {
									var tryMode = (direction == 'insert') ? 'into' : 'after';
									var validationResult = schemaHelper.TryCandidatesAt({context: contextObject, values: [newElement], mode: tryMode});

									if (validationResult.isValid) {
										this._addElement(contextObject, newElement, direction);
									} else {
										newElement.unregisterDocumentElement();
										this.aras.AlertError(this.aras.getResource('../Modules/aras.innovator.TDF', 'action.cannotaddexternalblock', newElement.GetProperty('name')));
									}
								}
							}
						}
					}.bind(this)
				);

				return;
			} else if (newElementName == '#text') {
				newElement = this._viewmodel.CreateElement('text', {});

				this._addElement(contextObject, newElement, direction);
			} else {
				var elementType = schemaHelper.GetSchemaElementType(newElementName);

				if ((elementType & Enums.XmlSchemaElementType.Table) == Enums.XmlSchemaElementType.Table) {
					this.actionsHelper.executeAction('tableactions', {
						action: 'table',
						createHelper: {
							'direction': direction,
							'newElementName': newElementName,
							updateClassification: this._updateClassification.bind(this),
							contextObject: contextObject
						}
					});
				} else if (((elementType & Enums.XmlSchemaElementType.Image) == Enums.XmlSchemaElementType.Image) ||
					((elementType & Enums.XmlSchemaElementType.Item) == Enums.XmlSchemaElementType.Item)) {
					var contentHelper = this._viewmodel.ContentGeneration();
					var elementOrigin = contentHelper.ConstructDefaultOrigin(newElementName);

					if ((elementType & Enums.XmlSchemaElementType.Image) == Enums.XmlSchemaElementType.Image) {
						var callback = function(result) {
							this._updateClassification({
								newElementName: newElementName,
								contextObject: contextObject,
								xmlSchemaElements: schemaHelper._xmlSchemaElements
							});

							var externalProvider = this._viewmodel.OriginExternalProvider();
							var refId = externalProvider.GetRefIdByImageId(result.image.getAttribute('id'));
							if (refId) {
								elementOrigin.setAttribute(externalProvider.referenceAttributeName, refId);
							}

							newElement = this._viewmodel.CreateElement('element', {origin: elementOrigin});
							newElement.Image(result.image);

							this._addElement(contextObject, newElement, direction);

							if (newElement.ContentType() == Enums.ElementContentType.Static) {
								contentHelper.refreshStaticContent(newElement);
							}
						}.bind(this);
						this._ShowEasyGraphicsDialog.bind(this)(
						{
							success: callback,
							search: function() { this._SearchImage(callback) }.bind(this),
						});
					} else {
						//It is required that customer set fixed value for typeId on node that inherits arasItemType behavior.
						//We need to find this typeId value in order to preset it for search dialog;
						var typeIdAttribute = schemaHelper.getSchemaAttribute(newElementName, 'typeId');
						var typeId = typeIdAttribute ? typeIdAttribute.Fixed : 'DE828FBA99FF4ABB9E251E8A4118B397';

						this._SearchItem(typeId,
							function(result) {
								var resItem = result.item;

								//we have to get original item type because tp_Item doesn't have all required properties in order to perform custom rendering if it exists
								if (typeId == 'DE828FBA99FF4ABB9E251E8A4118B397') {// tp_Item
									var itemQuery = this.aras.newIOMItem();
									var itemId = this.aras.getItemProperty(resItem, 'id');

									itemQuery.setAttribute('typeId', 'DE828FBA99FF4ABB9E251E8A4118B397');
									itemQuery.setID(itemId);
									itemQuery.setAction('get');
									resItem = itemQuery.apply().node;
								}

								this._updateClassification({
									newElementName: newElementName,
									contextObject: contextObject,
									xmlSchemaElements: schemaHelper._xmlSchemaElements
								});

								newElement = this._viewmodel.CreateElement('element', {origin: elementOrigin});
								newElement.Item(resItem);

								this._addElement(contextObject, newElement, direction);

								if (newElement.ContentType() == Enums.ElementContentType.Static) {
									contentHelper.refreshStaticContent(newElement);
								}
							}.bind(this)
						);
					}
				} else {
					newElement = this._viewmodel.CreateElement('element', {type: newElementName});
					if (!newElement) {
						return;
					}

					this._viewmodel.SuspendInvalidation();

					this._updateClassification({
						newElementName: newElementName,
						contextObject: contextObject,
						xmlSchemaElements: schemaHelper._xmlSchemaElements
					}).then(function() {
						this._addElement(contextObject, newElement, direction);
						this.actionsHelper.editor.focus();
						this._viewmodel.ResumeInvalidation();
					}.bind(this));
				}
			}
		},

		_ShowEasyGraphicsDialog: function(args) {
			var success = args.success;
			var searchCallback = args.search;

			function uploadCallback(file) {
				var innovator = this.aras.IomInnovator;
				var fileNode = this.aras.newFileItem(file);
				var fileId = fileNode.getAttribute('id');
				var fileItem = innovator.newItem();
				fileItem.loadAML(fileNode.xml);
				var result = {};
				try {
					result.fileItem = fileItem.apply();
				} catch (err) {
					console.error(err);
					result.error = err.message;
					showAlert("Failed to upload " + file.name + ". See console for details.");
					return result;
				}

				if (result.fileItem.isError()) {
					result.error = true;
					return result;
				}

				var newImage = innovator.newItem("tp_Image");
				var graphicPrefix = this._viewmodel._item.selectSingleNode("item_number").text;
				var graphicSuffix = new Date().toISOString().replace(/[-T:.]+/g,"-").slice(0,23);
				newImage.setProperty("item_number", graphicPrefix + ' ' + graphicSuffix);
				newImage.setProperty("name", file.name);
				newImage.setProperty("src", "vault:///?fileId=" + fileId)
				result.imageItem = newImage.apply("add");

				if (result.imageItem.isError()) {
					result.error = true;
				} else {
					result.image = result.imageItem.node;
					setTimeout( function() { success(result); },0);
				}

				return result;
			}

			function showAlert(msg) {
				this.aras.AlertError(msg);
			}

			var params = {
				aras: this.aras,
				content: 'EasyGraphicUpload/index.html',
				dialogWidth: 600,
				dialogHeight: 600,
				resizable: true,
				search: searchCallback,
				upload: uploadCallback.bind(this),
				errorMessage: showAlert.bind(this)
			};

			window.parent.ArasModules.MaximazableDialog.show('iframe', params);
		}
	});
});
