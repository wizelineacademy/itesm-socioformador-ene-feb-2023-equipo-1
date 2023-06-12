describe('CP082 - Admin puede visualizar contenedor de Open Forums', () => {
    it('Ver Open Forums', () => {
        cy.login('ana.pau1401@gmail.com', 'Aa00830553') // Login
        cy.get('#dashboard').click() // Darle click al dashboard
        cy.wait(1000)
        cy.get('#openForums').should('be.visible') // Puede ver contenedor de Open Forums
    })
})