Bug JIRA-733
Título: Checkout: Campo "Last Name" aceita caracteres numéricos e permite o avanço
Projeto: Sauce Demo E2E Tests
Prioridade: Média
Severidade: Média

Ambiente:

URL: https://www.saucedemo.com/checkout-step-one.html

Navegador: Todos

Usuário: standard_user

Passos para Reproduzir:

Navegue até a página de login e autentique-se com o usuário standard_user.

Adicione qualquer item ao carrinho de compras.

Prossiga para o carrinho e clique no botão "Checkout".

Na página "Checkout: Your Information", preencha o campo "First Name" com um valor válido (ex: "Jordão").

Preencha o campo "Zip/Postal Code" com um valor válido (ex: "11700-000").

No campo "Last Name", insira apenas caracteres numéricos (ex: "01110001").

Clique no botão "Continue".

Resultado Esperado:
O sistema deveria exibir uma mensagem de erro de validação abaixo do campo "Last Name", informando que apenas caracteres alfabéticos são permitidos. O avanço para a próxima página deveria ser bloqueado.

Resultado Atual:

O sistema aceita os caracteres numéricos no campo "Last Name" e avança para a página "Checkout: Overview" sem apresentar nenhuma mensagem de erro.

Anexos:

Evidências do bug