describe('CP025 - Volver a abrir el chat y ver la conversación existente en la página principal', () => {
  it('Reabrir conversacion', () => {
    cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
    cy.get('#answerbotbutton').click() // Open the chat
    // Check that the welcome message is displayed correctly
    cy.get("#chatbotinput").type("What should I do if I test positive?").type('{enter}') // Send a question
    cy.get('#msg-2', { timeout: 20000 })
      .should('not.have.text', '...')
      .should('not.have.text', '') // Wait for answer
    cy.get('#closechat').click() // Close chat
    cy.get('#answerbotbutton').click() // Open the chat again
    cy.get('#msg-1').should('exist') // Chat should appeat again with its contents
    cy.get('#msg-2').should('exist')
  })
})