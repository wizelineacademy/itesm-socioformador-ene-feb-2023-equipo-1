describe('CP075 - Admin puede darle click a UX Design', () => {
    it('Click a UX Design', () => {
        cy.login('ana.pau1401@gmail.com', 'Aa00830553') // Login
        cy.get('#dashboard').click() // Darle click al dashboard
        cy.wait(1000)
        cy.get('#dep-12').click() // Click a filtro UX Design
    })
})