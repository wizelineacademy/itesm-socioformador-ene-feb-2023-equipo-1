describe('CP079 - Admin puede darle click a User Experience', () => {
    it('Click a User Experience', () => {
        cy.login('ana.pau1401@gmail.com', 'Aa00830553') // Login
        cy.get('#dashboard').click() // Darle click al dashboard
        cy.wait(1000)
        cy.get('#dep-17').click() // Click a filtro User Experience
    })
})