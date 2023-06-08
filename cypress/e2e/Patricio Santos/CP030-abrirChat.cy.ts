describe('CP030 - Abrir el chat de AnswerBot en la página de questions/new', () => {
  it('Abrir chat', () => {
    cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
    cy.get('#ask-button').click() // Go to New Question page
    cy.wait(3000)
    cy.get('#openchat').should('not.be.visible') // Check if the chat is closed
    cy.get('#answerbotbutton').click() // Open the chat
    cy.get('#openchat').should('be.visible') // Check if the chat is open
  })
})