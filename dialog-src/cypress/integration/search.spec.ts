context('Search button', () => {
  const searchButton = '[data-test-id=SearchButton]'

  beforeEach(() => {
    cy.visit('/')
  })

  it('should show search button', () => {
    cy.get(searchButton).should('be.visible')
  })

  it('should search when clicked', () => {
    cy.get(searchButton).click()

    cy.on('window:alert', (msg) => {
      expect(msg.toLowerCase()).contains('search')
    })
  })
})
