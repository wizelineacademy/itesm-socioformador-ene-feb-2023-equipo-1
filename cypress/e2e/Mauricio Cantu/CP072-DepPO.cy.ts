describe('CP072 - Admin puede darle click a People Operations', () => {
    it('Click a People Operations', () => {
        cy.login('ana.pau1401@gmail.com', 'Aa00830553') // Login
        cy.get('#dashboard').click() // Darle click al dashboard
        cy.wait(1000)
        cy.get('#dep-9').click() // Click a filtro People Operations
    })
})