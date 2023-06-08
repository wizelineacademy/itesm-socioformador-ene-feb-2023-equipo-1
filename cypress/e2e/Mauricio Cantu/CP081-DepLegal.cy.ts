describe('CP081 - Admin puede darle click a Legal', () => {
    it('Click a Legal', () => {
        cy.login('ana.pau1401@gmail.com', 'Aa00830553') // Login
        cy.get('#dashboard').click() // Darle click al dashboard
        cy.wait(1000)
        cy.get('#dep-19').click() // Click a filtro Legal
    })
})