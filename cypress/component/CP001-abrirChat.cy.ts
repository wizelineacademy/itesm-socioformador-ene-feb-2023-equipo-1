import { FaBeer } from "react-icons/fa";

describe('prueba de icono', () => {
  it('playground', () => {
    cy.mount(<FaBeer/>)
    cy.get('svg').should('be.visible')
  })
})