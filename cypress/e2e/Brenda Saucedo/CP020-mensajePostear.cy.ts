describe('CP020 - Preguntar si se postea la pregunta después de Dislike en la página principal', () => {
  it('AnswerBot pregunta si quiere que se publique la pregunta a WizelineQuestions al dar Dislike', () => {
    cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
    cy.get('#answerbotbutton')
      .click() // Open the chat
    cy.get("#chatbotinput")
      .type("What should I do if I test positive?")
      .type('{enter}') // Type question
    cy.get('#msg-2', { timeout: 20000 })
      .should('not.have.text', '...')
      .should('not.have.text', '') // Wait for answer
    cy.get('#dislike-2').click() // Select the dislike icon
    cy.get('#feedback-2').should('have.text', 'Loading...') // Check the feedback
    cy.get('#feedback-2', { timeout: 20000 })
      .should('have.text', 'Thanks for the feedback!') // Check the feedback
    cy.get('#feedback-2', { timeout: 20000 })
      .should('have.text', 'Would you like to share your question with the community?') // Check the feedback
    cy.get('#publishbutton-2')
      .should('be.visible') // Find the publish button
  })
})