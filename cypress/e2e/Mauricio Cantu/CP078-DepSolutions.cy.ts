describe('CP078 - Admin puede darle click a Solutions', () => {
    it('Click a Solutions', () => {
        cy.login('ana.pau1401@gmail.com', 'Aa00830553') // Login
        cy.get('#dashboard').click() // Darle click al dashboard
        cy.wait(1000)
        cy.get('#dep-16').click() // Click a filtro Solutions
    })
})