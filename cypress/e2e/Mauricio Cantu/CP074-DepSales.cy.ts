describe('CP074 - Admin puede darle click a Sales', () => {
    it('Click a Sales', () => {
        cy.login('ana.pau1401@gmail.com', 'Aa00830553') // Login
        cy.get('#dashboard').click() // Darle click al dashboard
        cy.wait(1000)
        cy.get('#dep-11').click() // Click a filtro Sales
    })
})