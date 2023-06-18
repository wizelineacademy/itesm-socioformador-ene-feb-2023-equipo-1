describe('CP110 - Respuesta a base de Documentos', () => {
  it('Se demuestra el mensaje de agradecimiento apropiado al recibir feedback positivo.', () => {
    cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
    cy.get('#answerbotbutton')
      .click() // Open the chat
    cy.get("#chatbotinput")
      .type("What to do if I test positive")
      .type('{enter}') // Send question to Bot
    cy.get('#msg-2', { timeout: 40000 })
    .should('not.have.text', '...')
    .should('not.have.text', '') // Wait for answer
    cy.get("#like-2", { timeout: 20000 })
    .click() // Give positive feedback.
    cy.get('#feedback-2')
      .should('exist') // Find the feedback
      .should('have.text', 'Loading...') // Check it and wait for it to change
    cy.get('#feedback-2', { timeout: 20000 })
      .should('exist') // Find the feedback
      .should('have.text', 'Thanks for the feedback!') // Check and find final message of thanks.
  })
})