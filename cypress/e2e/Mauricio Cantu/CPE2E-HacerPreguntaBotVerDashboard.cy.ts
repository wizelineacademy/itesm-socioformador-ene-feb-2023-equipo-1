describe('CP013 - Hacer pregunta a bot, postearla al foro y verla en dashboard', () => {
    it('E2E', () => {
        cy.login('ana.pau1401@gmail.com', 'Aa00830553') // Login
        cy.get('#answerbotbutton')
            .click() // Open the chat
        cy.get("#chatbotinput")
            .type("What should I do if I test positive test1?")
            .type('{enter}') // Type question
        cy.get('#msg-2', { timeout: 60000 })
            .should('not.have.text', '...')
            .should('not.have.text', '') // Wait for answer
        cy.get('#dislike-2').click() // Select the dislike icon
        cy.get('#feedback-2').should('have.text', 'Loading...') // Check the feedback
        cy.get('#feedback-2', { timeout: 60000 })
            .should('have.text', 'Thanks for the feedback!') // Check the feedback
        cy.get('#feedback-2', { timeout: 60000 })
            .should('have.text', 'Would you like to share your question with the community?') // Check the feedback
        cy.get('#publishbutton-2', { timeout: 60000 })
            .click()// Find the publish button
        cy.wait(3000)
        cy.get('#closechat').click()
        cy.get('#dashboard').click() // Darle click al dashboard
        cy.wait(3000)

        cy.get('#dep-0').click() // Click a filtro All
        cy.contains('What should I do if I test positive test1?')
    })
})