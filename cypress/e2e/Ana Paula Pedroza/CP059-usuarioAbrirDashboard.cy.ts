describe('CP059 - Usuario normal no puede visualizar la pestaña de Dashboard', () => {
    it('Visualizar dashboard', () => {
        cy.login('mauriciocantut@gmail.com', 'Wizeline1') // Login
        cy.get('#dashboard').should('not.exist') // No puede ver pestaña de dashboard
    })
})