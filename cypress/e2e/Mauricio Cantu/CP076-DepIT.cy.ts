describe('CP076 - Admin puede darle click a IT & Security', () => {
    it('Click a IT & Security', () => {
        cy.login('ana.pau1401@gmail.com', 'Aa00830553') // Login
        cy.get('#dashboard').click() // Darle click al dashboard
        cy.wait(1000)
        cy.get('#dep-13').click() // Click a filtro IT & Security
    })
})