describe('Shopping Cart tests on Sauce Demo', () => {
// Before each test (it), this will run to ensure the user is logged in
beforeEach(() => {
  cy.login('standard_user', 'secret_sauce');
});

  it('Should successfully add an item to the cart', () => {
    cy.buyItemByIndex(0);
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.url().should('include', '/cart.html');
    cy.get('[data-test="inventory-item-name"]').should('be.visible');
  });

  it('Should successfully add two items to the cart', () => {

    cy.buyItemByIndex(0);
    cy.buyItemByIndex(1);

    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '2');
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.url().should('include', '/cart.html');
    cy.get('[data-test="inventory-item-name"]').should('have.length', 2).and('be.visible');  
  });

  it('Should successfully add and delete an item from the cart', () => {

    cy.buyItemByIndex(0);

    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.url().should('include', '/cart.html');
    cy.get('[data-test="inventory-item-name"]').should('be.visible');
    cy.get('[data-test="inventory-item"]').find('button').click();
    cy.get('[data-test="inventory-item-name"]').should('not.exist');
  });
});