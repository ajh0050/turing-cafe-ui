describe('test main view', () => {
  beforeEach(() => {
    cy.intercept('GET','http://localhost:3000/', {fixture: 'Reservations.json'})
    cy.request('http://localhost:3000/')
  })
  it('Can see the elements on the page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.app-title').contains('Turing Cafe Reservations')
  })
})