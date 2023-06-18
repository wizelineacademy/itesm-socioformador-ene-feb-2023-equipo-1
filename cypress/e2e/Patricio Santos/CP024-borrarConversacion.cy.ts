describe('CP024 - Borrar conversación de AnswerBot cuando se refresca la página principal', () => {
  it('Borrar conversacion', () => {
    cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
    cy.get('#answerbotbutton').click() // Open the chat
    // Check that the welcome message is displayed correctly
    cy.get("#chatbotinput").type("What should I do if I test positive?").type('{enter}') // Send a question
    cy.get('#msg-2', { timeout: 60000 })
      .should('not.have.text', '...')
      .should('not.have.text', '') // Wait for answer
    cy.reload() // Refresh the page
    cy.get('#answerbotbutton').click() // Open the chat again
    cy.get('#msg-1').should('not.exist') // Chat should be empty
  })
})