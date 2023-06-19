describe('E2E - Hacer una pregunta y no estar satisfecho con la respuesta', () => {
    it('Se realiza una pregunta al AnswerBot, el usuario no satisfecho con la pregunta da feedback negativo y la publica al foro para que sea respondida por gente en el foro.', () => {
      cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
      cy.get('#answerbotbutton')
        .click() // Open the chat
      cy.get("#chatbotinput")
        .type("Can I take snacks from the office?") // Send question
      cy.get("#sendbutton")
        .click()
      cy.get('#msg-2', { timeout: 60000 })
        .should('not.have.text', '...')
        .should('not.have.text', '') // Awaiting Bot Answer
      cy.get('#dislike-2')
        .click() // Dislike/Negative Feedback
      cy.get('#feedback-2')
        .should('have.text', 'Loading...') // Wait for  the Feedback to process
      cy.get('#feedback-2', { timeout: 60000 })
        .should('have.text', 'Thanks for the feedback!') // Waiting for Feedback to process
      cy.get('#feedback-2', { timeout: 60000 })
        .should('have.text', 'Would you like to share your question with the community?') // Check that publishing question button appears
      cy.get('#publishbutton-2', { timeout: 60000 })
        .should('exist') // Find the publish button
        .click() // Publish the question
      cy.get('#feedback-2')
        .should('have.text', 'Loading...')
      cy.get('#publishbutton-2', { timeout: 60000 })
        .should('not.exist'); // Publish Button should now be gone from view
      cy.get('#feedback-2')
        .should('have.text', 'Your question has been published successfully.') // Question is now published
      cy.contains("Can I take snacks from the office?")
        .should('exist') // Find the question asked in the forums.
    })
  })