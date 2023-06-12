describe('CP064 - Admin puede darle click a Not Assigned', () => {
    it('Click a Not Assigned', () => {
        cy.login('ana.pau1401@gmail.com', 'Aa00830553') // Login
        cy.get('#dashboard').click() // Darle click al dashboard
        cy.wait(1000)
        cy.get('#dep-1').click() // Click a filtro Not Assigned
    })
})