describe('CP085 - Admin puede darle click a boton de Answer it en Open Forums y ser redirigido', () => {
    it('Click answer it', () => {
        cy.login('ana.pau1401@gmail.com', 'Aa00830553') // Login
        cy.get('#dashboard').click() // Darle click al dashboard
        cy.wait(1000)
        cy.get('#button-0').click() // Click a Boton de Answer It de Open Forums
        cy.wait(1000)
    })
})