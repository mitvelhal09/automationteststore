# Technical Submission – Automation Test

#Task 1 – Test Scenarios

The following scenarios are automated under: `tests/checkout.spec.ts`

# 1. Happy Path – Successful Guest Checkout
**Scenarios Covered:**
- Shopper adds a product to the basket from the product page  
- Shopper proceeds to checkout using guest checkout  
- Shopper submits valid details and sees the order confirmation page  

---

# 2. Validation – Required Fields
**Scenarios Covered:**
- Checkout form displays validation errors when mandatory fields are missing or invalid  

---

# 3. Basket Update Reflects Total
**Scenarios Covered:**
- Shopper updates product quantity in the basket  
- Total price updates correctly  

---

# Task 2 – Additional Test Cases

The following scenarios are automated under: `tests/additionalScenarios.spec.ts`

# 1. Search Functionality
- Validate search with valid product  
- Validate search with no results (empty state)

# 2. Basket Functionality
- Remove item from basket  
- Update item quantity and verify total price  

---

# Task 3 – Test Report

Test reports are generated using **Allure Reports**.

# How to View Report
(Ensure prerequisites from README are completed)

npx allure open

Technical Questions
1. How long did you spend on the technical test?
Approximately 3 hours, including framework setup and test implementation.

2. What would you add to your solution if you had more time?
CI/CD pipeline (GitHub Actions)
API test coverage to complement UI tests
Test to requirment coverage for tracability
Additional scenarios for registered users (beyond guest checkout)
Additional comments to make test more redable for non technical users

3. What do you think is the most interesting trend in test automation today?
Shift-left testing combined with AI-assisted test generation, enabling faster feedback and improved productivity.

4. How would you implement test automation in a legacy application? Have you ever done this before?
Yes, I have experience implementing automation in legacy systems (e.g., Ospri and BNZ).

Approach:

Assess feasibility of UI automation (based on stability and structure)
Introduce API testing where UI is not reliable
Start with critical business flows
Gradually expand coverage to regression scenarios
Continuously stabilize flaky tests and improve reliability
