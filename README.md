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

* **Comandos Customizados:** Abstração de lógicas repetitivas para aumentar a legibilidade e a manutenção do código. Foram criados os seguintes comandos:
    * `cy.login(username, password)`
    * `cy.buyItemByIndex(index)`
    * `cy.setupCheckout()`
* **Testes Guiados por Dados (Data-Driven Testing):** Utilização de arrays de dados para testar múltiplos cenários de validação de formulário com um único bloco de código, reduzindo a duplicação e facilitando a adição de novos casos de teste.
* **Organização com Hooks (`beforeEach`):** Uso do hook `beforeEach` para preparar o estado da aplicação antes de cada teste, garantindo que eles sejam independentes e consistentes.
* **Estratégia de Seletores Robustos:** Priorização do uso de seletores `[data-test]` para desacoplar os testes de mudanças na estrutura ou estilo do HTML, tornando a automação mais estável.