describe('CP057 - Vizualizar componente de FAQs', () => {
    it('Abrir chat', () => {
        cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
        cy.get('#ask-button').click()
        cy.wait(3000)
        cy.get('#FAQContainer').should('be.visible')
    })
    })
    
    