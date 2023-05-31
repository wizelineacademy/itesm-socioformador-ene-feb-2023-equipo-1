describe('open chatbot', () => {
  it('passes', () => {
    // Clear cookies
    cy.clearCookies()
    // Landing Page
    cy.visit('http://localhost:3000/', { failOnStatusCode: false })
    // Login
    cy.contains('Log in with your Wizeline account').click()
    // Fill form
    cy.get('#username').type('test123@hotmail.com')
    cy.get('#password').type('W1Z311N3q!')
    cy.contains('Continue').click()
    // Reload to correctly load the page
    cy.reload()
    // Close main window when login
    cy.get('#btnAccept').click()
    // Visit New Question
    cy.get('#ask-button').click()
    // Open ChatBot
    cy.get('.sc-gYMRRK').click()
    // Check if ChatBot is open/visible
    cy.get('div[name="ChatBot"]').should('be.visible')
  })
})