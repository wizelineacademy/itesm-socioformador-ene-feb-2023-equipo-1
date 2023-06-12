describe('CP060 - Admin puede visualizar la pestaña de Dashboard', () => {
    it('Visualizar dashboard', () => {
        cy.login('ana.pau1401@gmail.com', 'Aa00830553') // Login
        cy.get('#dashboard').should('be.visible') // Puede ver pestaña de dashboard
    })
})