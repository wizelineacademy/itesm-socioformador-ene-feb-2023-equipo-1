describe('CP077 - Admin puede darle click a CEO / Exec Staff', () => {
    it('Click a CEO / Exec Staff', () => {
        cy.login('ana.pau1401@gmail.com', 'Aa00830553') // Login
        cy.get('#dashboard').click() // Darle click al dashboard
        cy.wait(1000)
        cy.get('#dep-14').click() // Click a filtro CEO / Exec Staff
    })
})