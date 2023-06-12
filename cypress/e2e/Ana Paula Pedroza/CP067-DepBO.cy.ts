describe('CP067 - Admin puede darle click a Business Operations', () => {
    it('Click a Business Operations', () => {
        cy.login('ana.pau1401@gmail.com', 'Aa00830553') // Login
        cy.get('#dashboard').click() // Darle click al dashboard
        cy.wait(1000)
        cy.get('#dep-4').click() // Click a filtro Business Operations
    })
})