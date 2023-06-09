describe('CP019 - Dar Dislike y recibir mensaje del AnswerBot en la página principal', () => {
  it('Darle Dislike y recibir un mensaje de agradecimiento/confirmación del feedback', () => {
    cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
    cy.get('#answerbotbutton').click() // Open the chat
    // Check that the welcome message is displayed correctly
    cy.get("#chatbotinput").type("What should I do if I test positive?").type('{enter}') // Type question
    cy.get('#msg-2', { timeout: 20000 })
      .should('not.have.text', '...')
      .should('not.have.text', '') // Wait for answer
    cy.get('#dislike-2').click() // Select the dislike icon
    cy.get('#feedback-2')
      .should('be.visible') // Find the feedback
      .should('have.text', 'Loading...') // Check the feedback
    cy.get('#feedback-2', { timeout: 20000 })
      .should('be.visible') // Find the feedback
      .should('have.text', 'Thanks for the feedback!') // Check the feedback
  })
})