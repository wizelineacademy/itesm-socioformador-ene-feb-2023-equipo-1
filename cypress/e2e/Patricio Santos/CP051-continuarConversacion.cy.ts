describe('CP051 - Continuar conversación con AnswerBot en la página de questions/new', () => {
  it('Coninuar conversacion', () => {
    cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
    cy.get('#ask-button').click() // Go to New Question page
    cy.wait(3000)
    cy.get('#answerbotbutton').click() // Open the chat
    // Check that the welcome message is displayed correctly
    cy.get("#chatbotinput").type("What should I do if I test positive?").type('{enter}') // Send a question
    cy.get('#msg-2', { timeout: 30000 }).should('not.have.text', '') // Wait for answer
    cy.get("#chatbotinput").type("And if I test negative?").type('{enter}') // Send a question
    cy.get('#msg-4', { timeout: 30000 }).should('not.have.text', '') // Wait for answer
  })
})