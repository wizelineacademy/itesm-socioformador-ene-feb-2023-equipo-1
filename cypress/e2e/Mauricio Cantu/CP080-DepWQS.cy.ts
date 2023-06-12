describe('CP080 - Admin puede darle click a Wizeline Questions Staff', () => {
    it('Click a Wizeline Questions Staff', () => {
        cy.login('ana.pau1401@gmail.com', 'Aa00830553') // Login
        cy.get('#dashboard').click() // Darle click al dashboard
        cy.wait(1000)
        cy.get('#dep-18').click() // Click a filtro Wizeline Questions Staff
    })
})