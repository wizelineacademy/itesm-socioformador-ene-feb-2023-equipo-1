describe('CP032 - Cerrar el AnswerBot en la página de questions/new', () => {
  it('Cerrar chat', () => {
    cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
    cy.get('#ask-button')
      .click() // Go to New Question page
    cy.wait(3000) // Wait for the page to load
    cy.get('#answerbotbutton')
      .click() // Open the chat
    cy.get('#closechat')
      .click() // Close chat
    cy.get('#answerbotbutton')
      .should('be.visible') // Find the button
  })
})