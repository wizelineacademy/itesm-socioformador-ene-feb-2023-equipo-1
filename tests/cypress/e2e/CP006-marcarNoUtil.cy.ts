describe('CP005 - Marcar respuesta como útil', () => {
  it('Se recibe una respuesta del answerbot (CP003) y se marca la respuesta como útil', () => {
    cy.visit('http://localhost:3000/') //Redirects to login
    cy.contains('Log in with your Wizeline account').click() //Clicks on login button
    cy.get('#username').type('pato.santos10@gmail.com') //Enter username and password
    cy.get('#password').type('A01197723$')
    cy.get('.c79fd81e4 > .cda1ae149').click() //Clicks on continue button
    cy.reload() //Reload page to get main page
    cy.get('#btnAccept').click() //Remove pop-up
    cy.get('#ask-button').click() //Click ' Ask Question' button
    cy.get('.sc-gITdmR').click() //Click AnswerBot button
    cy.get('.sc-dWINGa').type('What should I do if I test positive?') //Write question
    cy.get('.sc-jGprRt').click() //Click 'Send' button
    cy.get('.sc-hKdnnL').click() //Click 'Dislike' button
    cy.get(':nth-child(3) > :nth-child(2) > span') //Veryify that the answer was marked as not useful
  })
})