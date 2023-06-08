import { WELCOME_MESSAGE } from '../../../app/utils/constants'

describe('CP003 - Ver el mensaje de bienvenida del AnswerBot en la página principal', () => {
  it('Ver mensaje de bienvenida', () => {
    cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
    cy.get('#openchat').should('not.be.visible') // Check if the chat is closed
    cy.get('#answerbotbutton').click() // Open the chat
    // Check that the welcome message is displayed correctly
    cy.contains(WELCOME_MESSAGE).should('be.visible')
  })
})