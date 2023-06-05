describe('CP001 - Encontrar el botón de AnswerBot en la página principal', () => {
  it('Encontrar el botón', () => {
    cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
    cy.get('#answerbotbutton').should('be.visible') // Find the button
  })
})