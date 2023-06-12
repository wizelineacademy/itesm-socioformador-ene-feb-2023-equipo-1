describe('CP084 - Admin puede visualizar contenedor de AnswerBot Feedback', () => {
    it('Ver AnswerBot Feedback', () => {
        cy.login('ana.pau1401@gmail.com', 'Aa00830553') // Login
        cy.get('#dashboard').click() // Darle click al dashboard
        cy.wait(1000)
        cy.get('#answerbotF').should('be.visible') // Puede ver contenedor de AnswerBot Feedback
    })
})