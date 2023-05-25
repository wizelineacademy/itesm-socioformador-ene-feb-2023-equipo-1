describe('CP008 - Recibir una respuesta relevante en el chat', () => {
  it('Se recibe una respuesta del answerbot (CP003) y esta es relevante', () => {
    cy.visit('http://localhost:3000/') //Redirects to login
    cy.contains('Log in with your Wizeline account').click() //Clicks on login button
    cy.get('#username').type('pato.santos10@gmail.com') //Enter username and password
    cy.get('#password').type('A01197723$')
    cy.get('.c79fd81e4 > .cda1ae149').click() //Clicks on continue button
    cy.reload() //Reload page to get main page
    cy.get('#btnAccept').click() //Remove pop-up
    cy.get('#ask-button').click() //Click ' Ask Question' button
    cy.get('.sc-gYMRRK').click() //Click AnswerBot button
    cy.get('.sc-DdwlG').type('How many days should I isolate if I have COVID?') //Write question
    cy.get('.sc-dwVMhp').click() //Click 'Send' button
    cy.get(':nth-child(3) > .sc-egNfGp > .sc-hFrEEg', {timeout:50000})
  })
})