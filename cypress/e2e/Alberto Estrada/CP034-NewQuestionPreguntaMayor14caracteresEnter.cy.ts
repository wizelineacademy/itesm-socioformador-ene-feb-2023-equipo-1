describe('CP034 - Escribir pregunta de largo adecuado y dar clic a ENTER en la página de questions/new', () => {
    it('Abrir chat', () => {
        cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
        cy.get('#ask-button').click()
        cy.wait(3000)
        cy.get('#openchat').should('not.be.visible') // Check if the chat is closed
        cy.get('#answerbotbutton').click() // Open the chat
        cy.get('#openchat').should('be.visible') // Check if the chat is open
        cy.get('#chatbotinput').type('Where can I see who I am working with in a project?' + '{enter}');
    })
    })
    