describe('CPE2E - Hacer pregunta al bot, postearla al foro, verla en dashboard y que me redirija para poderla contestar', () => {
    it('E2E', () => {
        cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
        cy.get('#answerbotbutton').click() // Open the chat
        cy.get("#chatbotinput").type("Are any Holidays celebrated within Wizeline?")
        cy.get('#sendbutton').click()
        cy.get('#msg-2', { timeout: 60000 })
            .should('not.have.text', '...')
            .should('not.have.text', '') // Wait for answer
        cy.get('#dislike-2').click() // Select the dislike icon
        cy.get('#feedback-2').should('have.text', 'Loading...') // Check the feedback
        cy.get('#feedback-2', { timeout: 60000 }).should('have.text', 'Thanks for the feedback!') // Check the feedback
        cy.get('#feedback-2', { timeout: 60000 }).should('have.text', 'Would you like to share your question with the community?') // Check the feedback
        cy.get('#publishbutton-2', { timeout: 60000 }).click()// Find the publish button
        cy.wait(3000)
        cy.get('#closechat').click()
        cy.get('#dashboard').click() // Darle click al dashboard
        cy.wait(3000)
        cy.get('#dep-0').click() // Click a filtro All
        cy.contains('Are any Holidays celebrated within Wizeline?')
        cy.get('#button-0').click()// Find the publish button
        cy.contains('Are any Holidays celebrated within Wizeline?')
    })
})