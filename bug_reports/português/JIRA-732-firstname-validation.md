Bug JIRA-732
Título: Checkout: Campo "First Name" aceita caracteres numéricos e permite o avanço
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

Na página "Checkout: Your Information", preencha o campo "Last Name" com um valor válido (ex: "Quirino").

Preencha o campo "Zip/Postal Code" com um valor válido (ex: "11700-000").

No campo "First Name", insira apenas caracteres numéricos (ex: "01101010").

Clique no botão "Continue".

Resultado Esperado:
O sistema deveria exibir uma mensagem de erro de validação abaixo do campo "First Name", informando que apenas caracteres alfabéticos são permitidos. O avanço para a próxima página (/checkout-step-two.html) deveria ser bloqueado.

Resultado Atual:
O sistema aceita os caracteres numéricos no campo "First Name" e avança para a página "Checkout: Overview" sem apresentar nenhuma mensagem de erro.

Anexos:

Evidências do bug.