describe('CP111 - Respuesta a base de Base de Datos', () => {
  it('Se le hace una pregunta que solo puede ser respondida por medio de una respuesta de administrador oficial que se recupera de la base de datos.', () => {
    cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
    cy.get('#answerbotbutton')
      .click() // Open the chat
    cy.get("#chatbotinput")
      .type("Can I bring my cat into the office")
      .type('{enter}') // Type question
    cy.get('#msg-2', { timeout: 40000 })
      .should('not.have.text', '...')
      .should('not.have.text', '') // Wait for answer
  })
})