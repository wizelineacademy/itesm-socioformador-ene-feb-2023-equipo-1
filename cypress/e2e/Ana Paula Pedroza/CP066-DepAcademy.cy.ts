describe('CP066 - Admin puede darle click a Academy', () => {
    it('Click a Academy', () => {
        cy.login('ana.pau1401@gmail.com', 'Aa00830553') // Login
        cy.get('#dashboard').click() // Darle click al dashboard
        cy.wait(1000)
        cy.get('#dep-3').click() // Click a filtro Academy
    })
})