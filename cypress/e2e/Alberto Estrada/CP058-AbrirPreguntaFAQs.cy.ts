describe('CP057 - Abrir una pregunta de FAQs', () => {
    it('Abrir chat', () => {
        cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
        cy.get('#ask-button').click()
        cy.wait(3000)
        cy.get('#FAQList')
            .children()
            .first()
            .click();
    })
    })
    
    