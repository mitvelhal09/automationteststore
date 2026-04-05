# Test Automation Project

## Prerequisites
- Node.js
- npm

## Installation
npm install
Java

## Run Tests
npx playwright test

## Run in UI mode
npx playwright test --ui

## Generate Report
allure serve allure-results

## Assumptions
- Guest checkout is always available
- No login required
- Test data is static

## Trade-offs
- Focused on critical flows over full coverage
- Minimal test data setup
