Bug JIRA-734
Título: Checkout: Campo "Zip/Postal Code" aceita caracteres alfabéticos e permite o avanço
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

Na página "Checkout: Your Information", preencha os campos "First Name" e "Last Name" com valores válidos.

No campo "Zip/Postal Code", insira apenas caracteres alfabéticos (ex: "lordoftherings").

Clique no botão "Continue".

Resultado Esperado:
O sistema deveria exibir uma mensagem de erro de validação abaixo do campo "Zip/Postal Code", informando que o formato é inválido. O avanço para a próxima página deveria ser bloqueado.

Resultado Atual:
O sistema aceita os caracteres alfabéticos no campo "Zip/Postal Code" e avança para a página "Checkout: Overview" sem apresentar nenhuma mensagem de erro.

Anexos:

Evidências do bug