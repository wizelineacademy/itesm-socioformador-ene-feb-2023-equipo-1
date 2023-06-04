describe('CP029 - Encontrar el botón de AnswerBot en la página de questions/new', () => {
  it('Encontrar el botón', () => {
    cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
    cy.get('#ask-button').click() // Go to New Question page
    cy.wait(3000)
    cy.get('#answerbotbutton').should('be.visible') // Find the button
  })
})