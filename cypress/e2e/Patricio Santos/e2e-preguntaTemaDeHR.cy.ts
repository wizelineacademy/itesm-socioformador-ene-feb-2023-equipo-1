import { WELCOME_MESSAGE } from '../../../app/utils/constants'

describe('E2E - Realizar preguntas sobre Wizeline', () => {
  it('Un usuario ingresa a la aplicación para hacer unas preguntas de HR y le da like a las respuestas útiles', () => {
    cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
    cy.get('#ask-button').click() // Go to New Question page
    cy.wait(3000) // Wait for the page to load
    cy.get('#answerbotbutton').click() // Open the chat
    // Check that the welcome message is displayed correctly
    cy.contains(WELCOME_MESSAGE).should('be.visible')
    // The user types a question about HR
    cy.get("#chatbotinput").type("Tell me about HR in Wizeline").type('{enter}')
    cy.get('#msg-2', { timeout: 50000 })
      .should('not.have.text', '...')
      .should('not.have.text', '') // Wait for answer
    // The user makes a follow-up question
    cy.get("#chatbotinput").type("Can you tell me a bit more about it?").type('{enter}')
    cy.get('#msg-4', { timeout: 50000 })
      .should('not.have.text', '...')
      .should('not.have.text', '') // Wait for answer
    // Like the follow-up answer
    cy.get('#like-4').click()
    cy.get('#feedback-4', { timeout: 60000 })
      .should('exist') // Find the feedback
      .should('not.have.text', '') // Check the feedback
    cy.get('#closechat').click() // Close chat
    cy.get("#userDropdown").click()
    cy.contains("Logout").click()
    cy.wait(1000) // Wait pop-up to load
    cy.get("#confirmLogout").click()
  })
})