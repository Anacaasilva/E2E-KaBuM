/// <reference types="cypress"/>

describe('Account validad', () => {

  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.on('uncaught:exception', (_err, _runnable) => false);
    cy.fixture('urls.json')
      .then(({ account }) => cy.visit(account));
  });

  it('', () => {
    expect(true).to.equal(true)
  });

});


// if (cy.get('[data-testid="modal"]').should('be.visible')) cy.get('[data-testid="btnClose"]').click();
// cy.get('#linkMinhaContaHeader').click();

// cy.get('.sc-cwVcKo').should('be.visible').click()