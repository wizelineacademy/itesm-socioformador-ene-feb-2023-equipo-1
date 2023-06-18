describe('CP110 - Respuesta a base de Documentos', () => {
  it('Se demuestra que existe el boton de feedback positivo después de recibir una respuesta del Bot.', () => {
    cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
    cy.get('#answerbotbutton')
      .click() // Open the chat
    cy.get("#chatbotinput")
      .type("What to do if I test positive")
      .type('{enter}') // Send question to Bot
    cy.get('#msg-2', { timeout: 40000 })
    .should('not.have.text', '...')
    .should('not.have.text', '') // Wait for answer
    cy.get("#like-2")
    .should('exist') // Find the positive feedback button.
  })
})