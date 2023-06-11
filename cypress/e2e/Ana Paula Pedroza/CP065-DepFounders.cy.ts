describe('CP065 - Admin puede darle click a Founders', () => {
    it('Click a Founders', () => {
        cy.login('ana.pau1401@gmail.com', 'Aa00830553') // Login
        cy.get('#dashboard').click() // Darle click al dashboard
        cy.wait(1000)
        cy.get('#dep-2').click() // Click a filtro Founders
    })
})