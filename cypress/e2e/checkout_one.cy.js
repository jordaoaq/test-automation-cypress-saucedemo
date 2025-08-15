describe('/checkout_one tests on Sauce Demo', () => {

  beforeEach(() => {
    
    cy.setupCheckout();
  });


  const testCases = [
  {
    test: 'No firstName',
    lastName: 'Quirino',
    postalCode: '11700-000',
    expectedError: 'Error: First Name is required'
  },
  {
    test: 'No lastName',
    firstName: 'Jordao',
    postalCode: '11700-000',
    expectedError: 'Error: Last Name is required'
  },
  {
    test: 'No postalCode',
    firstName: 'Jordao',
    lastName: 'Quirino',
    expectedError: 'Error: Postal Code is required'
  }
];

// Gere os testes dinamicamente com um loop
testCases.forEach((tc) => {
  it(`${tc.test}. Should display error, ${tc.expectedError.toLowerCase()}`, () => {
    if (tc.firstName) cy.get('[data-test="firstName"]').type(tc.firstName);
    if (tc.lastName) cy.get('[data-test="lastName"]').type(tc.lastName);
    if (tc.postalCode) cy.get('[data-test="postalCode"]').type(tc.postalCode);
    
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should('be.visible').and('have.text', tc.expectedError);
  });
});

// TODO: Remove .skip() when bug JIRA-732 is fixed.
it.skip('Numbers on firstName. Should display error, not include /checkout-step-two', () => {
    cy.get('[data-test="firstName"]').type('01101010'); // BUG
    cy.get('[data-test="lastName"]').type('Quirino');
    cy.get('[data-test="postalCode"]').type('11700-000');
    cy.get('[data-test="continue"]').click();
    cy.url().should('not.include', '/checkout-step-two.html')
    // Error occurs because the firstName field is not validated correctly.
    cy.url().should('include', '/checkout-step-one.html');
    cy.get('[data-test="error"]').should('be.visible');
    cy.get('[data-test="error"]').should('contain.text', 'Error: First Name is invalid'); 
});

// TODO: Remove .skip() when bug JIRA-733 is fixed.
it.skip('Numbers on secondName. Should display error, not include /checkout-step-two', () => {
    cy.get('[data-test="firstName"]').type('Jordão'); 
    cy.get('[data-test="lastName"]').type('01110001'); // BUG
    cy.get('[data-test="postalCode"]').type('11700-000');
    cy.get('[data-test="continue"]').click();
    cy.url().should('not.include', '/checkout-step-two.html')
    // Error occurs because the secondName field isn't valid.
    cy.url().should('include', '/checkout-step-one.html');
    cy.get('[data-test="error"]').should('be.visible');
    cy.get('[data-test="error"]').should('contain.text', 'Error: Second Name is invalid'); 
});

// TODO: Remove .skip() when bug JIRA-734 is fixed.
it.skip('Letters on postalCode. Should display error, not include /checkout-step-two', () => {
    cy.get('[data-test="firstName"]').type('Jordão'); 
    cy.get('[data-test="lastName"]').type('Quirino');
    cy.get('[data-test="postalCode"]').type('lordoftherings'); // BUG
    cy.get('[data-test="continue"]').click();
    cy.url().should('not.include', '/checkout-step-two.html')
    // Error occurs because the firstName field isn't valid.
    cy.url().should('include', '/checkout-step-one.html');
    cy.get('[data-test="error"]').should('be.visible');
    cy.get('[data-test="error"]').should('contain.text', 'Error: Postal Code not valid.'); 
});
})