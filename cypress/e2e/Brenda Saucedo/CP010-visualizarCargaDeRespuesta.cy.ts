describe('CP010 - Regresar mensaje de espera mientras se regresa una respuesta en la página principal', () => {
  it('El AnswerBot regresa un mensaje de espera ("...") en lo que se le regresa una respuesta al usuario', () => {
    cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
    cy.get('#answerbotbutton')
      .click() // Open the chat
    cy.get("#chatbotinput")
      .type("What should I do if I test positive?")
      .type('{enter}') // Type question
    cy.get('#msg-2')
      .should('have.text', '...') // Check waiting answer
    cy.get('#msg-2', { timeout: 60000 })
      .should('not.have.text', '...')
      .should('not.have.text', '') // Wait for answer
  })
})