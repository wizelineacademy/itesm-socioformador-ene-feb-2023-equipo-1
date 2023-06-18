describe('CP110 - Respuesta a base de Documentos', () => {
  it('Se le hace una pregunta de largo no adecuado y se presiona enter para demostrar que no se envia al Bot.', () => {
    cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
    cy.get('#ask-button')
      .click() // Go to New Question page
    cy.wait(3000) // Wait for the page to load
    cy.get('#answerbotbutton')
      .click() // Open the chat
    cy.get("#chatbotinput")
      .type('Too short')
      .type('{enter}') // type enter
    cy.get('#chatbotinput')
    .should('exist')
    .should('have.value', "Too short") // Should still have the question in it.
  })
})