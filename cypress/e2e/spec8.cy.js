/// <reference types="cypress" />
describe('page331', () => {
  before(() => {

    const log = Cypress.log({
      displayName: 'AUTH0 LOGIN',
      message: [`🔐 Authenticating`],
      autoEnd: false
    });
  
    log.snapshot('before');
  
    cy.session(
      "placeholder",
      () => {
        cy.visit('/authenticate?homeRealm=0');
        cy.get('#username').type("placeholder");
      },
      {
        cacheAcrossSpecs: false
      }
    );
  
    log.snapshot('after');
    log.end();
  })

  it('works', () => {
    cy.visit('https://example.cypress.io')
  })
})
