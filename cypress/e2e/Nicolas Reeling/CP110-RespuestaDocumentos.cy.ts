describe('CP110 - Respuesta a base de Documentos', () => {
  it('Se le hace una pregunta que solo puede ser respondida por media de información de documentos y responde apropiadamente.', () => {
    cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
    cy.get('#answerbotbutton')
      .click() // Open the chat
    cy.get("#chatbotinput")
      .type("What is the visible badge policy?")
      .type('{enter}') // Type question
    cy.get('#msg-2', { timeout: 40000 })
      .should('not.have.text', '...')
      .should('not.have.text', '') // Wait for answer
  })
})