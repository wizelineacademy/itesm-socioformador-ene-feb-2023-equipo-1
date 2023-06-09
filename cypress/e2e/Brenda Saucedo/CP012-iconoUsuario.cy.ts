describe('CP012 - Mostrar el ícono del usuario en sus mensajes en la página principal', () => {
  it('El ícono del usuario se muestra adecuadamente en el chat del Asnwerbot en la parte de los mensajes del usuario.', () => {
    cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
    cy.get('#answerbotbutton').click() // Open the chat
    // Check that the welcome message is displayed correctly
    cy.get("#chatbotinput").type("What should I do if I test positive?").type('{enter}') // Type question
    cy.get('#icon-user-1').should('be.visible') // Find the user icon
  })
})