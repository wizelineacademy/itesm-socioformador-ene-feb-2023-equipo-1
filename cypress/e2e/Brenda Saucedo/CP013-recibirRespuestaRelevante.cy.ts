describe('CP013 - Recibir respuesa del AnswerBot en la página principal', () => {
  it('Recibir respuesta relevante', () => {
    cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
    cy.get('#answerbotbutton')
      .click() // Open the chat
    cy.get("#chatbotinput")
      .type("What should I do if I test positive?")
      .type('{enter}') // Type question
    cy.get('#msg-2', { timeout: 60000 })
      .should('not.have.text', '...')
      .should('not.have.text', '')
      .should('not.have.text', 'No answer found, sorry!') // Wait for answer
  })
})