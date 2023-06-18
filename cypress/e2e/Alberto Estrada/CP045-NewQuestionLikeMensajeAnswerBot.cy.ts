describe('CP045 - Dar Like y recibir mensaje del AnswerBot en la página de questions/new', () => {
    it('Abrir chat', () => {
        cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
        cy.get('#ask-button').click()
        cy.wait(3000)
        cy.get('#openchat').should('not.be.visible') // Check if the chat is closed
        cy.get('#answerbotbutton').click() // Open the chat
        cy.get('#openchat').should('be.visible') // Check if the chat is open
        cy.get('#chatbotinput').type('Where can I see who I am working with in a project?');
        cy.get('#sendbutton').click()
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
    })
    })
    