describe('Purchase test on Sauce Demo', () => {
  it('Should successfully complete a purchase', () => {

    cy.setupCheckout();
    
    cy.get('[data-test="firstName"]').type('Jordao');
    cy.get('[data-test="lastName"]').type('Quirino');
    cy.get('[data-test="postalCode"]').type('11700-000');
    cy.get('[data-test="continue"]').click();
    cy.url().should('include', '/checkout-step-two.html');
    cy.get('[data-test="inventory-item-name"]').should('be.visible');
    cy.get('[data-test="finish"]').click();
    cy.url().should('include', '/checkout-complete.html');
    cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!');
    cy.get('[data-test="back-to-products"]').click();
    cy.url().should('include', '/inventory.html');
  });
});
