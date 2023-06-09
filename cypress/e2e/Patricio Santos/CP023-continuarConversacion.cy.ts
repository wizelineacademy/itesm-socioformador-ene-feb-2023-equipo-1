describe('CP023 - Continuar conversación con AnswerBot en la página principal', () => {
  it('Coninuar conversacion', () => {
    cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
    cy.get('#answerbotbutton').click() // Open the chat
    // Check that the welcome message is displayed correctly
    cy.get("#chatbotinput").type("What should I do if I test positive?").type('{enter}') // Send a question
    cy.get('#msg-2', { timeout: 20000 })
      .should('not.have.text', '...')
      .should('not.have.text', '') // Wait for answer
    cy.get("#chatbotinput").type("And if I test negative?").type('{enter}') // Send a question
    cy.get('#msg-4', { timeout: 20000 })
      .should('not.have.text', '...')
      .should('not.have.text', '') // Wait for answer
  })
})