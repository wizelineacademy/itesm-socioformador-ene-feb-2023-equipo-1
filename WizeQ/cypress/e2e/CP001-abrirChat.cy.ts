describe('CP001 - Abir el chat de Answerbot', () => {
  it('Se puede abrir el chat del Answerbot en la página', () => {
    cy.visit('http://localhost:3000/') //Redirects to login
    cy.contains('Log in with your Wizeline account').click() //Clicks on login button
    cy.get('#username').type('pato.santos10@gmail.com') //Enter username and password
    cy.get('#password').type('A01197723$')
    cy.contains('Continue').click() //Clicks on continue button
    cy.reload() //Reload page to get main page
    cy.get('#btnAccept').click() //Remove pop-up
    cy.get('#ask-button').click() //Click ' Ask Question' button
    cy.get('.sc-gYMRRK').click() //Click AnswerBot button
    cy.get('.sc-DdwlG') //Text input field correctly displayed
    cy.get('.sc-ddcaxn') //Messages field correctly displayed
    cy.get('.sc-dwVMhp') //Send button correctly displayed
  })
})