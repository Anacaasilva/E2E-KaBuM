/// <reference types="cypress"/>

describe('Routes Auth', () => {

  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.on('uncaught:exception', (_err, _runnable) => false);
    cy.fixture('urls.json')
      .then(({ home }) => cy.visit(home));
  });

  it('Navigating to login', () => {
    cy.get('#linkLoginHeader').click();
    cy.fixture('urls.json')
      .then(({ login }) => {
        cy.url().should(url => {
          expect(url).to.equal(login);
        })
      })
  });
  
});