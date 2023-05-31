/// <reference types="cypress"/>

describe('Auth', () => {

  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.on('uncaught:exception', (_err, _runnable) => false);
    cy.fixture('urls.json')
      .then(({ login }) => cy.visit(login));
  });

  // it('Log In Invalid, empty input', () => {
  //   cy.contains('button', 'Entrar').click();
  //   cy.get(':nth-child(2) > .sc-eDDNvR > .sc-fmSAUk').should('be.visible');
  //   cy.get(':nth-child(3) > .sc-eDDNvR > .sc-fmSAUk').contains('Insira sua senha.').should('be.visible');
  // });

  // it('Log In Invalid, credentials', () => {
  //   cy.fixture('userData.json')
  //     .then(({ invalidUser: { username, password } }) => {
  //       cy.get(':nth-child(2) > .sc-eDDNvR > .sc-jTrPJq > input').type(username);
  //       cy.get(':nth-child(3) > .sc-eDDNvR > .sc-jTrPJq > input').type(password);
  //       cy.contains('button', 'Entrar').click();
  //       cy.contains('p', 'E-mail, CPF, CNPJ ou senha incorretos').should('be.visible');
  //     });
  // });


  it('Log In Valid', () => {
    cy.fixture('userData.json')
      .then(({ validUser: { username, password } }) => {
        cy.get(':nth-child(2) > .sc-eDDNvR > .sc-jTrPJq > input').type(username);
        cy.get(':nth-child(3) > .sc-eDDNvR > .sc-jTrPJq > input').type(password);
        cy.contains('button', 'Entrar').click();
      });
      
    if (cy.get('[data-testid="modal"]').should('be.visible')) cy.get('[data-testid="btnClose"]').click();
    cy.get('#linkMinhaContaHeader').click()
  });

});
