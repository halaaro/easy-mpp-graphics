context('Browse button', () => {
  const browseButton = '[data-test-id=FileInputButton_BrowseButton]'
  const fileInput = '[data-test-id=FileInputButton_input]'
  const uploadButton = '[data-test-id=FileUploadForm_submitButton]'
  const cancelButton = '[data-test-id=FileUploadForm_cancelButton]'
  const imagePreview = '[data-test-id=ImagePreview]'

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

  it('should prompt for file selection', () => {
    cy.get(browseButton).click()
    cy.get(`${fileInput}[data-test=clicked]`)
  })

  it('should show error when invalid type is selected', () => {
    cy.get(fileInput).attachFile('invalid.gif')

    cy.on('window:alert', (msg) => {
      expect(msg.toLowerCase()).contains('invalid file')
    })
  })

  it('should work for PNG files', () => {
    cy.get(fileInput).attachFile('valid.png')
    cy.get(imagePreview)
  })

  it('should work for JPG files', () => {
    cy.get(fileInput).attachFile('valid.jpg')
    cy.get(imagePreview)
  })

  it('should work for JPEG files', () => {
    cy.get(fileInput).attachFile('valid.jpg')
    cy.get(imagePreview)
  })

  it('should show image preview', () => {
    cy.get(fileInput).attachFile('valid.png')
    cy.get(imagePreview)
  })

  it('should show image info', () => {
    cy.get(fileInput).attachFile('valid.png')
    cy.get(imageInfo.root)

    cy.get(imageInfo.filename).contains('valid.png')
    cy.get(imageInfo.size).contains('1 KB')
    cy.get(imageInfo.modified).contains('Modified:')
    cy.get(imageInfo.dimensions).contains('67 x 83')
  })

  it('should upload', () => {
    cy.get(fileInput).attachFile('valid.png')
    cy.get(uploadButton).click()

    cy.on('window:alert', (msg) => {
      expect(msg.toLowerCase()).contains('upload')
    })
  })

  it('should cancel', () => {
    cy.get(fileInput).attachFile('valid.png')
    cy.get(cancelButton).click()

    cy.get(browseButton)
  })
})
