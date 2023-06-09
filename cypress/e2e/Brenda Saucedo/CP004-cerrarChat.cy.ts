describe('CP004 - Cerrar el AnswerBot en la página principal', () => {
  it('Cerrar chat', () => {
    cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
    cy.get('#answerbotbutton').click() // Open the chat
    cy.get('#closechat').click() // Close chat
    cy.get('#answerbotbutton').should('be.visible') // Find the button
  })
})