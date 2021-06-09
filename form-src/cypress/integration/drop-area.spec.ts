context('Drag and drop area', () => {
  const dropArea = '[data-test-id=FileDropArea]'
  const dropTarget = '[data-test-id=FileDropArea_target]'
  const imagePreview = '[data-test-id=ImagePreview]'
  const uploadButton = '[data-test-id=FileUploadForm_submitButton]'
  const cancelButton = '[data-test-id=FileUploadForm_cancelButton]'

  const imageInfo = {
    root: '[data-test-id=ImageInfo]',
    filename: '[data-test-id=ImageInfo_filename]',
    size: '[data-test-id=ImageInfo_size]',
    modified: '[data-test-id=ImageInfo_modified]',
    dimensions: '[data-test-id=ImageInfo_dimensions]',
  }

  beforeEach(() => {
    cy.visit('/')
  })

  it('should show drop area', () => {
    cy.get(dropArea).should('be.visible')
  })

  it('should show error when invalid file dropped', () => {
    cy.get(dropTarget).attachFile('invalid.gif', { subjectType: 'drag-n-drop' })
    cy.get(dropArea).should('be.visible')
  })

  it('should work for PNG files', () => {
    cy.get(dropTarget).attachFile('valid.png', { subjectType: 'drag-n-drop' })
    cy.get(imagePreview)
  })

  it('should work for JPG files', () => {
    cy.get(dropTarget).attachFile('valid.jpg', { subjectType: 'drag-n-drop' })
    cy.get(imagePreview)
  })

  it('should work for JPEG files', () => {
    cy.get(dropTarget).attachFile('valid.jpg', { subjectType: 'drag-n-drop' })
    cy.get(imagePreview)
  })

  it('should show preview when valid file dropped', () => {
    cy.get(dropTarget).attachFile('valid.png', { subjectType: 'drag-n-drop' })
    cy.get(imagePreview).should('be.visible')
  })

  it('should show image info when file dropped', () => {
    cy.get(dropTarget).attachFile('valid.png', { subjectType: 'drag-n-drop' })
    cy.get(imageInfo.root)

    cy.get(imageInfo.filename).contains('valid.png')
    cy.get(imageInfo.size).contains('1 KB')
    cy.get(imageInfo.modified).contains('Modified:')
    cy.get(imageInfo.dimensions).contains('67 x 83')
  })

  it('should upload from dropped file', () => {
    cy.get(dropTarget).attachFile('valid.png', { subjectType: 'drag-n-drop' })
    cy.get(uploadButton).click()

    cy.on('window:alert', (msg) => {
      expect(msg.toLowerCase()).contains('upload')
    })
  })

  it('should allow cancel to return to drop area', () => {
    cy.get(dropTarget).attachFile('valid.png', { subjectType: 'drag-n-drop' })
    cy.get(cancelButton).click()
    cy.get(dropArea).should('be.visible')
  })
})
