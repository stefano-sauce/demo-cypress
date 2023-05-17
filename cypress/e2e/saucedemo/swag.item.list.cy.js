
describe('swag items list', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1')
    // login
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('.btn_action').click();
  })

  it('should validate that all products are present', () => {
    
    cy.get('.inventory_list').should('be.visible');
    cy.get('.inventory_item').should('have.length', 6);
  });

  it('should validate that the details of a product can be opened', () => {

    cy.get('.inventory_list').should('be.visible');

    // Actual test starts here
    const product = 'Sauce Labs Backpack';

    cy.get('.inventory_item').contains(product).find('.inventory_item_name').click();
    // Assertions
    cy.get('.inventory_details').should('be.visible');
    cy.get('.inventory_details').contains(product);
  });

  it('should validate that a product can be added to the cart', () => {

    cy.get('.inventory_list').should('be.visible');

    // Actual test starts here
    cy.get('.shopping_cart_link').should('have.text', '');
    cy.get('.inventory_item').eq(0).find('.btn_primary.btn_inventory').click();
    cy.get('.shopping_cart_link').should('have.text', '1');
  });


  it('should be able to open the cart summary page', () => {

    cy.get('.inventory_list').should('be.visible');

    // Actual test starts here
    cy.get('.shopping_cart_link').click();
    cy.get('#cart_contents_container').should('be.visible');
  });
});
