describe('CP005 - Volver a abrir el chat y ver el contenido previo en la página principal', () => {
  it('Volver a abrir chat y visualizar el guardado del historial de mensajes', () => {
    cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
    cy.get('#answerbotbutton').click() // Open the chat
    // Check that the welcome message is displayed correctly
    cy.get("#chatbotinput").type("What should I do if I test positive?").type('{enter}') // Type question
    cy.get('#msg-2', { timeout: 20000 })
      .should('not.have.text', '...')
      .should('not.have.text', '') // Wait for answer
    cy.get('#closechat').click() // Close chat
    cy.get('#answerbotbutton').click() // Open the chat again
    cy.get('#msg-0').should('be.visible') // Chat should appear again with its contents
    cy.get('#msg-1').should('be.visible') // Chat should appear again with its contents
    cy.get('#msg-2').should('be.visible') // Chat should appear again with its contents
  })
})