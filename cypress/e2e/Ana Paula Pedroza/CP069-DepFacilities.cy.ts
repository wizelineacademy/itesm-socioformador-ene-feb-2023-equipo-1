describe('CP069 - Admin puede darle click a Facilities', () => {
    it('Click a Facilities', () => {
        cy.login('ana.pau1401@gmail.com', 'Aa00830553') // Login
        cy.get('#dashboard').click() // Darle click al dashboard
        cy.wait(1000)
        cy.get('#dep-6').click() // Click a filtro Facilities
    })
})