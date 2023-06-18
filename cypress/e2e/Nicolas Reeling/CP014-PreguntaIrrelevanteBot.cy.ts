describe('CP110 - Respuesta a base de Documentos', () => {
  it('Se le hace una pregunta que no esta dentro de su contexto al Bot.', () => {
    cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
    cy.get('#answerbotbutton')
      .click() // Open the chat
    cy.get("#chatbotinput")
      .type("Can I take the office snacks home?")
      .type('{enter}') // Press enter to send the question
    cy.get('#msg-2', { timeout: 40000 })
    .should('not.have.text', '...')
    .should('not.have.text', '') // Wait for answer
  })
})