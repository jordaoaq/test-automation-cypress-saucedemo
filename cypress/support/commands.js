
/*
 * Comando customizado para realizar login na plataforma Sauce Demo.
 * @param {string} username - O nome de usuário para o login.
 * @param {string} password - A senha para o login.
 */
Cypress.Commands.add('login', (username, password) => {
  cy.visit('/');
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
  cy.url().should('include', '/inventory.html');
});

/*
 * Adiciona múltiplos itens ao carrinho baseado em uma lista de índices.
 * A busca é escopada no container 'inventory-list' para maior robustez.
 * @param {number[]} indices - Um array de números representando os índices a serem comprados.
 */
Cypress.Commands.add('buyItemByIndex', (index) => { 
  cy.get('[data-test="inventory-item"]') 
    .eq(index) 
    .find('button.btn_inventory')
    .click();
});

/* * Configura o checkout inicializando o login, comprando um item e navegando até a página de checkout.
 * Este comando é útil para evitar repetição de código em testes que iniciam com o checkout.
 */
Cypress.Commands.add('setupCheckout', () => {
  cy.login('standard_user', 'secret_sauce');
  cy.buyItemByIndex(1);
  cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');
  cy.get('[data-test="shopping-cart-link"]').click();
  cy.url().should('include', '/cart.html');
  cy.get('[data-test="checkout"]').click();
  cy.url().should('include', '/checkout-step-one.html');
});