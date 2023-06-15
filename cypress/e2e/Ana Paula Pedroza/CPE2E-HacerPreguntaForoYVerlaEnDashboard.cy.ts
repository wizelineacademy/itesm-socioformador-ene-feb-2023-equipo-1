describe('CP013 - Hacer pregunta en foro y verla reflejada en dashboard', () => {
    it('E2E', () => {
        cy.login('ana.pau1401@gmail.com', 'Aa00830553') // Login
        cy.contains('What should I do if I test positive?')
        cy.get('#ask-button')
            .click() // Ask Question
        cy.get('.sc-jmnVvD > :nth-child(1) > .dropdown > .dropdown-toggle').click()
        cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(1) > a').click()
        cy.get('.editor-class').type("What should I do if I test positive test2?")
        cy.get('#submit-btn').click()
        cy.get('.eiJKJa').click()
        cy.wait(3000)
        cy.get('#dashboard').click() // Darle click al dashboard
        cy.wait(3000)
        cy.get('#dep-0').click() // Click a filtro All
        cy.contains('What should I do if I test positive test2?')
    })
})