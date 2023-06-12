describe('CP063 - Admin puede darle click a All', () => {
    it('Click a All', () => {
        cy.login('ana.pau1401@gmail.com', 'Aa00830553') // Login
        cy.get('#dashboard').click() // Darle click al dashboard
        cy.wait(1000)
        cy.get('#dep-0').click() // Click a filtro All
    })
})