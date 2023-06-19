describe('CP018 - Desaparecer el mensaje de agradecimiento de Like del AnswerBot en la página principal', () => {
    it('Dar like y recibir mensaje de agradecimiento/confirmación del feedback', () => {
      cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
      cy.get('#answerbotbutton').click() // Open the chat
      cy.get("#chatbotinput")
        .type("Where can I see who I am working with in a project?")
        .type('{enter}') // Type question
      cy.get('#msg-2', { timeout: 60000 })
        .should('not.have.text', '...')
        .should('not.have.text', '') // Wait for answer
      cy.get('#like-2').click() // Select like icon
      cy.get('#feedback-2')
        .should('be.visible') // Find the feedback
        .should('have.text', 'Loading...') // Check the feedback
      cy.get('#feedback-2', { timeout: 60000 })
        .should('be.visible') // Find the feedback
        .should('have.text', 'Thanks for the feedback!') // Check the feedback
        .should('not.have.text', '')
    })
  })