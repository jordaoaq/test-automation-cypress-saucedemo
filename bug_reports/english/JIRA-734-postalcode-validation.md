Bug 3: JIRA-734
Title: Checkout: "Zip/Postal Code" field accepts alphabetic characters and allows user to proceed
Project: Sauce Demo E2E Tests
Priority: Medium
Severity: Medium

Environment:

URL: https://www.saucedemo.com/checkout-step-one.html

Browser: All

User: standard_user

Steps to Reproduce:

Follow steps 1-3 from bug JIRA-732.

On the "Checkout: Your Information" page, fill in the "First Name" and "Last Name" fields with valid values.

In the "Zip/Postal Code" field, enter only alphabetic characters (e.g., "lordoftherings").

Click the "Continue" button.

Expected Result:
The system should display a validation error message below the "Zip/Postal Code" field, indicating that the format is invalid. Proceeding to the next page should be blocked.

Actual Result:
The system accepts the alphabetic characters in the "Zip/Postal Code" field and proceeds to the "Checkout: Overview" page without displaying any error message. 

Attachments:

Evidences of the bug.