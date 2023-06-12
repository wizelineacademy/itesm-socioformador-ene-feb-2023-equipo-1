describe('CP021 - Postear pregunta y recibir mensaje de confirmación en la página principal', () => {
  it('Se publica la pregunta por medio del AnswerBot', () => {
    cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
    cy.get('#answerbotbutton')
      .click() // Open the chat
    cy.get("#chatbotinput")
      .type("What should I do if I test positive?")
      .type('{enter}') // Type question
    cy.get('#msg-2', { timeout: 20000 })
      .should('not.have.text', '...')
      .should('not.have.text', '') // Wait for answer
    cy.get('#dislike-2')
      .click() // Select the dislike icon
    cy.get('#feedback-2')
      .should('have.text', 'Loading...') // Check the feedback
    cy.get('#feedback-2', { timeout: 20000 })
      .should('have.text', 'Thanks for the feedback!') // Check the feedback
    cy.get('#feedback-2', { timeout: 20000 })
      .should('have.text', 'Would you like to share your question with the community?') // Check the feedback
    cy.get('#publishbutton-2')
      .should('be.visible') // Find the publish button
      .click() // Publish question
    cy.get('#feedback-2')
      .should('have.text', 'Loading...') // Check the feedback
    cy.get('#publishbutton-2', { timeout: 20000 })
      .should('not.exist'); // Not find the publish button
    cy.get('#feedback-2')
      .should('have.text', 'Your question has been published successfully.') // Check the feedback
  })
})