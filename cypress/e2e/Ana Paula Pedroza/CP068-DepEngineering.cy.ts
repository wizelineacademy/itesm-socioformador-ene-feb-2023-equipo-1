describe('CP068 - Admin puede darle click a Engineering', () => {
    it('Click a Engineering', () => {
        cy.login('ana.pau1401@gmail.com', 'Aa00830553') // Login
        cy.get('#dashboard').click() // Darle click al dashboard
        cy.wait(1000)
        cy.get('#dep-5').click() // Click a filtro Engineering
    })
})