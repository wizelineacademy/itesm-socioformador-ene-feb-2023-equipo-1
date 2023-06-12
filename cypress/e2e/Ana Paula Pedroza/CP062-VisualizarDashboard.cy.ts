describe('CP062 - Admin puede visualizar Dashboard', () => {
    it('Click a dashboard', () => {
        cy.login('ana.pau1401@gmail.com', 'Aa00830553') // Login
        cy.get('#dashboard').click() // Darle click al dashboard
        cy.wait(1000)
    })
})