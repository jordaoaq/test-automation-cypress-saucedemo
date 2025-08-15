🇧🇷 *Uma versão em português existe abaixo!*
***

# E2E Test Automation Project - Sauce Demo

![Cypress](https://img.shields.io/badge/Cypress-13.11.0-darkgreen?style=for-the-badge&logo=cypress)

This project is an end-to-end (E2E) automated test suite developed for the "[Sauce Demo](https://www.saucedemo.com/)" e-commerce demo website. The main goal is to demonstrate skills in web test automation using Cypress, applying development and test organization best practices.

## Features Tested

* **Authentication:**
    * Login with valid credentials.
    * Error validation for invalid credentials, locked-out users, and empty fields.
* **Shopping Cart:**
    * Adding one or more items to the cart.
    * Removing items from the cart.
    * Verification of the item count on the cart badge.
* **Checkout Flow:**
    * Error validation for the checkout form with empty required fields.
    * Documentation of known bugs (e.g., invalid data validation) using skipped tests (`.skip()`).
* **Full Purchase Flow:**
    * An end-to-end test that simulates the complete user journey, from login to the order confirmation page.

## Technologies Used

* **Cypress:** The main framework for E2E test automation.
* **JavaScript:** The programming language for writing the test scripts.
* **Node.js/npm:** Package manager and execution environment.

## How to Run the Project

1.  **Prerequisite:** Have [Node.js](https://nodejs.org/) installed.

2.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git](https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git)
    ```
3.  **Navigate to the project folder and install the dependencies:**
    ```bash
    cd your-repository-name
    npm install
    ```

4.  **Run the tests by opening the Cypress Test Runner:**
    ```bash
    npx cypress open
    ```

## Implemented Patterns and Best Practices

* **Bug Reporting:** Detailed bug reports for defects found during testing, formatted to simulate documentation in a tool like Jira. (See the `/bug_reports` directory).
* **Custom Commands:** Abstraction of repetitive logic to increase code readability and maintainability. The following commands were created:
    * `cy.login(username, password)`
    * `cy.buyItemByIndex(index)`
    * `cy.setupCheckout()`
* **Data-Driven Testing:** Use of data arrays to test multiple form validation scenarios with a single block of code, reducing duplication and making it easy to add new test cases.
* **Organization with Hooks (`beforeEach`):** Use of the `beforeEach` hook to prepare the application state before each test, ensuring they are independent and consistent.
* **Robust Selector Strategy:** Prioritization of `[data-test]` selectors to decouple tests from changes in HTML structure or styling, making the automation more stable.


🇧🇷 *PORTUGUÊS*

# Projeto de Automação de Testes E2E - Sauce Demo

![Cypress](https://img.shields.io/badge/Cypress-13.11.0-darkgreen?style=for-the-badge&logo=cypress)

Este projeto é uma suíte de testes automatizados de ponta a ponta (E2E) desenvolvida para o site de e-commerce de demonstração "[Sauce Demo](https://www.saucedemo.com/)". O objetivo principal é demonstrar minhas habilidades em automação de testes web utilizando Cypress, aplicando as melhores práticas de desenvolvimento e organização de testes.

## Funcionalidades Testadas

* **Autenticação:**
    * Login com credenciais válidas.
    * Validação de erros para credenciais inválidas, usuário bloqueado e campos vazios.
* **Carrinho de Compras:**
    * Adição de um ou mais itens ao carrinho.
    * Remoção de itens do carrinho.
    * Verificação da quantidade de itens no ícone do carrinho.
* **Fluxo de Checkout:**
    * Validação de erros para o formulário de checkout com campos obrigatórios vazios.
    * Documentação de bugs conhecidos (ex: validação de dados inválidos) através de testes pulados (`.skip()`).
* **Compra Completa:**
    * Teste de ponta a ponta que simula a jornada completa do usuário, desde o login até a página de confirmação do pedido.

## Tecnologias Utilizadas

* **Cypress:** Framework principal para a automação dos testes E2E.
* **JavaScript:** Linguagem de programação para a escrita dos scripts de teste.
* **Node.js/npm:** Gerenciador de pacotes e ambiente de execução.

## Como Executar o Projeto

1.  **Pré-requisito:** Ter o [Node.js](https://nodejs.org/) instalado.

2.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU-USUARIO/NOME-DO-SEU-REPOSITORIO.git](https://github.com/SEU-USUARIO/NOME-DO-SEU-REPOSITORIO.git)
    ```
    3.  **Acesse a pasta do projeto e instale as dependências:**
    ```bash
    cd nome-do-seu-repositorio
    npm install
    ```

4.  **Execute os testes abrindo a interface do Cypress:**
    ```bash
    npx cypress open
    ```

## Padrões e Boas Práticas Implementadas

* **Documentação de Bugs:** Criação de relatórios de bugs detalhados para os defeitos encontrados, simulando o processo de documentação em ferramentas como Jira. (Veja a pasta `/bug_reports`).
* **Comandos Customizados:** Abstração de lógicas repetitivas para aumentar a legibilidade e a manutenção do código. Foram criados os seguintes comandos:
    * `cy.login(username, password)`
    * `cy.buyItemByIndex(index)`
    * `cy.setupCheckout()`
* **Testes Guiados por Dados (Data-Driven Testing):** Utilização de arrays de dados para testar múltiplos cenários de validação de formulário com um único bloco de código, reduzindo a duplicação e facilitando a adição de novos casos de teste.
* **Organização com Hooks (`beforeEach`):** Uso do hook `beforeEach` para preparar o estado da aplicação antes de cada teste, garantindo que eles sejam independentes e consistentes.
* **Estratégia de Seletores Robustos:** Priorização do uso de seletores `[data-test]` para desacoplar os testes de mudanças na estrutura ou estilo do HTML, tornando a automação mais estável.