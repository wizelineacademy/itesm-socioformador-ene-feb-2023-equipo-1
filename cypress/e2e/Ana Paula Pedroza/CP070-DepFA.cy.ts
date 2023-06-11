describe('CP070 - Admin puede darle click a Finance & Accounting', () => {
    it('Click a Finance & Accounting', () => {
        cy.login('ana.pau1401@gmail.com', 'Aa00830553') // Login
        cy.get('#dashboard').click() // Darle click al dashboard
        cy.wait(1000)
        cy.get('#dep-7').click() // Click a filtro Finance & Accounting
    })
})