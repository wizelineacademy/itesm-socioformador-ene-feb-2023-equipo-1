describe('CP019 - Visualizar AnswerBot en WizelineQuestions', () => {
  it('Un usuario puede ver el botón para AnswerBot en WizelineQuestions', () => {
    cy.visit('http://localhost:3000/') //Redirects to login
    cy.contains('Log in with your Wizeline account').click() //Clicks on login button
    cy.get('#username').type('pato.santos10@gmail.com') //Enter username and password
    cy.get('#password').type('A01197723$')
    cy.get('.c79fd81e4 > .cda1ae149').click() //Clicks on continue button
    cy.reload() //Reload page to get main page
    cy.get('#btnAccept').then($button => {
      if ($button.is(':visible')){
        cy.get('#btnAccept').click() //Remove pop-up
      }
    })
    cy.get('#ask-button').click() //Click 'Ask Question' button
    cy.wait(3000)
    cy.get('.sc-gITdmR') //AnswerBot button correctly displayed
  })
})