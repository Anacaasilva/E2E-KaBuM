/// <reference types="cypress"/>

describe('Auth', () => {

  beforeEach(() => {

    cy.viewport(1920, 1080);

    cy.on('uncaught:exception', (_err, _runnable) => false);

  });

  it('Navigating to login', () => {

    cy.visit('https://www.kabum.com.br/');

    cy.get('#linkLoginHeader').click();


    cy.fixture('urls.json')
      .then(({ login }) => {
        cy.url().should(url => {
          expect(url).to.equal(login);
        })

      })
  });

  it('Log In', () => {


    cy.fixture('urls.json')
      .then(({ login }) => {
        cy.visit(login);
      })

    cy.fixture('userData.json')
      .then(({ validUser: { username, password } }) => {
        cy.get(':nth-child(2) > .sc-eDDNvR > .sc-jTrPJq > input').type(username);
        cy.get(':nth-child(3) > .sc-eDDNvR > .sc-jTrPJq > input').type(password);
        cy.get('.sc-dpHXRF > .sc-beqWaB').click();
      })

  })
});
