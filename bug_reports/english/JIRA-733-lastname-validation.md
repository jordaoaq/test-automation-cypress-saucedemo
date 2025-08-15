Claro! É uma excelente ideia ter a documentação em inglês para demonstrar suas habilidades para um público global.

Aqui estão os mesmos relatórios de bug e a atualização para o README.md, traduzidos para o inglês.

Part 1: English Bug Reports
Crie os mesmos arquivos na sua pasta bug_reports. Você pode usar o mesmo nome de arquivo.

Bug 1: JIRA-732
Title: Checkout: "First Name" field accepts numeric characters and allows user to proceed
Project: Sauce Demo E2E Tests
Priority: Medium
Severity: Medium

Environment:

URL: https://www.saucedemo.com/checkout-step-one.html

Browser: All

User: standard_user

Steps to Reproduce:

Navigate to the login page and authenticate as the standard_user.

Add any item to the shopping cart.

Proceed to the cart and click the "Checkout" button.

On the "Checkout: Your Information" page, fill in the "Last Name" field with a valid value (e.g., "Quirino").

Fill in the "Zip/Postal Code" field with a valid value (e.g., "11700-000").

In the "First Name" field, enter only numeric characters (e.g., "01101010").

Click the "Continue" button.

Expected Result:
The system should display a validation error message below the "First Name" field, indicating that only alphabetic characters are allowed. Proceeding to the next page (/checkout-step-two.html) should be blocked.

Actual Result:
The system accepts the numeric characters in the "First Name" field and proceeds to the "Checkout: Overview" page without displaying any error message.

Attachments:

In this field, you would attach a screenshot or a short video demonstrating the behavior.

Bug 2: JIRA-733
Title: Checkout: "Last Name" field accepts numeric characters and allows user to proceed
Project: Sauce Demo E2E Tests
Priority: Medium
Severity: Medium

Environment:

URL: https://www.saucedemo.com/checkout-step-one.html

Browser: All

User: standard_user

Steps to Reproduce:

Navigate to the login page and authenticate as the standard_user.

Add any item to the shopping cart.

Proceed to the cart and click the "Checkout" button.

On the "Checkout: Your Information" page, fill in the "First Name" field with a valid value (e.g., "Jordao").

Fill in the "Zip/Postal Code" field with a valid value (e.g., "11700-000").

In the "Last Name" field, enter only numeric characters (e.g., "01110001").

Click the "Continue" button.

Expected Result:
The system should display a validation error message below the "Last Name" field, indicating that only alphabetic characters are allowed. Proceeding to the next page should be blocked.

Actual Result:
The system accepts the numeric characters in the "Last Name" field and proceeds to the "Checkout: Overview" page without displaying any error message.

Attachments:

Evidences of the bug.