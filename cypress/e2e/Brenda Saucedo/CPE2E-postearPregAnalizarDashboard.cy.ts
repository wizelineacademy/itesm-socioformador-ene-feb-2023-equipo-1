describe('CPE2E - Brindar feedback positivo y visualizarlo en el dashboard', () => {
  it('Se brinda feedback positivo al AnswerBot y se puede ver reflejado la retroalimentación en el dashboard', () => {
    cy.login('pato.santos10@gmail.com', 'A01197723$') // Login
    cy.get('#answerbotbutton')
      .click() // Open the chat
    cy.get('#ask-button')
      .click() // Ask Question
    cy.wait(3000) // Wait

    // Question
    let text = "What happens if the offices start to catch fire?";
    let ans = "You must activate the alarm so that everyone in the offices is aware.";

    cy.get('.sc-jmnVvD > :nth-child(1) > .dropdown > .dropdown-toggle')
      .click() // Click the dropdown menu
    cy.get(':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(1) > a')
      .click() // Click one option
    cy.get('.editor-class')
      .type(text) // Type the question
    cy.get('#submit-btn')
      .click() // Click on submit
    cy.get('.eiJKJa')
      .click() // Click on accept to post
    cy.wait(3000) // Wait

    cy.get('#dashboard')
      .click() // Click on dashboard
    cy.wait(3000) // Wait
    cy.get('#openForums')
      .contains(text) // Search the question on the Open Forums
    cy.get('#button-0')
      .click() // Click on answer button
    cy.get('.question-row__admin-buttons--container > :nth-child(1)')
      .click() // Click on button to answer by admin
    cy.get('.sc-jWEIYm')
      .type(ans) // Type answer
    cy.get('#submitAnswerBtn')
      .click() // Click on button to post answer
    cy.wait(3000) // Wait

    cy.get('#dashboard')
      .click() // Click on dashboard
    cy.wait(3000) // Wait
    cy.get('#openForums') // Should not exist the question on the Open Forums
      .contains(text)
      .should('not.exist');
      
  })
})