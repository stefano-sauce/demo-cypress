/// <reference types="cypress" />


describe('login page', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1')
  })

  it('should be able to test loading of login page', () => {
    cy.get('#login_button_container').should('be.visible')
  });

  it('should be able to login with a standard user', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('.btn_action').click();
    cy.get('.inventory_list').should('be.visible');

  });

  it('should not be able to login with a locked user', () => {
    // It doesn't matter which error we check, all errors should be checked in a UT
    // With this UT we just check that A failure is triggered
    cy.get('#user-name').type('locked_out_user');
    cy.get('#password').type('secret_sauce');
    cy.get('.btn_action').click();
    cy.get('[data-test="error"]').should('have.text','Epic sadface: Sorry, this user has been locked out.');
  });
})
