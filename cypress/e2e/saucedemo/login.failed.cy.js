/// <reference types="cypress" />


describe('login page', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1')
  })


  it('should be able to login with a standard user', () => {
    // This is not the correct username so the test should fail
    let swag_user = Cypress.env('SWAG_USER')
    if (Boolean(swag_user) == false) {
      swag_user = 'standard_user';
  }

    console.log('swag user is: ' + swag_user);

    cy.get('#user-name').type(swag_user);
    cy.get('#password').type('secret_sauce');
    cy.get('.btn_action').click();
    cy.get('.inventory_list').should('be.visible');

  });

})
