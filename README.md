# Playwright E2E Test Automation Framework

This repository contains a comprehensive End-to-End (E2E) testing framework built with Playwright and TypeScript. It is designed to be robust, scalable, and maintainable, demonstrating best practices in test automation architecture. This project is an ideal showcase of modern testing strategies for a software engineering portfolio.

## Core Philosophy

The framework is built on a foundation of **separation of concerns**. Test logic, page interactions, test data, and configuration are all decoupled. This approach leads to tests that are highly readable, easy to maintain, and simple to extend as the application under test evolves.

## Tech Stack

*   **Framework:** [Playwright](https://playwright.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Test Data Generation:** [Faker.js](https://fakerjs.dev/) (Assumed for dynamic data)
*   **Environment Management:** [dotenv](https://github.com/motdotla/dotenv)
*   **Version Control:** Git with [Conventional Commits](https://www.conventionalcommits.org/)

---

## Architectural Strategy & Project Structure

The project's structure is intentionally designed to support scalability and different testing environments (e.g., Development, Staging, Production).

```
project-root/
├── src/
│   ├── fixtures/         # Playwright fixtures for setup/teardown
│   ├── interface/        # TypeScript interfaces for data models
│   ├── pages/            # Page Object Model (POM) classes
│   └── tests/            # Test specifications (.spec.ts files)
│
├── config/               # Environment-specific configurations
│   ├── dev.js
│   └── staging.js
│
├── data/                 # Environment-specific test data
│   ├── devData.js
│   └── stagingData.js
│
├── utils/                # Helper/utility functions
│
├── .env.dev              # Environment variables for 'dev'
├── .env.staging          # Environment variables for 'staging'
├── .env.example          # Template for environment files
├── .gitignore
├── playwright.config.ts  # Main Playwright configuration
└── README.md
```

### 1. Page Object Model (POM) - `src/pages/`

This framework strictly adheres to the Page Object Model (POM) design pattern.

*   **Strategy:** Each page (or significant component) of the application is represented by its own class (e.g., `SignUpPage`, `HomePage`). This class encapsulates all the locators (e.g., `page.getByRole(...)`) and interaction methods (e.g., `startSignup(...)`) for that specific page.
*   **Benefit:** This isolates page-specific code from the test logic. If a UI element's locator changes, the update is only needed in one place—the corresponding page object file. The tests themselves remain unchanged, making the suite significantly more resilient to UI churn.

### 2. Fixtures for Dependency Injection - `src/fixtures/`

Playwright's test fixtures are used to provide a clean and reusable setup for tests.

*   **Strategy:** Instead of instantiating page objects within each test file, we create fixtures (like in `registerUserFixture.ts`) that do this for us. These fixtures are then passed as arguments to the test function.
*   **Benefit:** This is a form of dependency injection. It reduces boilerplate code in test files, making them cleaner and more focused on the test steps. It also allows for complex setup logic (like logging in a user before a test) to be abstracted away.

### 3. Environment-Driven Configuration & Data - `config/` & `data/`

A key feature of this framework is its ability to run against different environments with distinct configurations and data sets.

*   **Strategy:**
    1.  An environment variable, `TEST_ENV` (e.g., `dev`, `staging`), dictates which configuration to use.
    2.  A helper utility dynamically imports the corresponding files from the `config/` and `data/` directories based on the `TEST_ENV` value.
    3.  The `config/` directory holds settings like API endpoints, timeouts, or feature flags.
    4.  The `data/` directory holds test data. For `dev`, this might be dynamically generated data using Faker.js. For `staging` or `prod`, it might be static, known test accounts.
*   **Benefit:** This powerful strategy allows the exact same test suite to be executed against any environment without changing a single line of test code. It promotes consistency and confidence when validating deployments across different stages.

### 4. Secure Variable Injection with `.env`

Sensitive data like passwords or API keys are managed securely and are kept out of version control.

*   **Strategy:** The `dotenv` library loads environment variables from `.env.*` files into `process.env`. The `TEST_ENV` variable determines which file is loaded (e.g., `TEST_ENV=staging` loads `.env.staging`).
*   **Benefit:** The `.gitignore` file explicitly ignores all `.env*` files (except for `.env.example`), preventing secrets from being accidentally committed to the repository. The `.env.example` file serves as a template for developers to create their own local configuration.

---

## Coding Standards & Best Practices

*   **Resilient Locators:** We prioritize user-facing locators recommended by Playwright, such as `getByRole`, `getByLabel`, and `getByText`. These are less prone to breaking from minor code refactoring compared to brittle locators like CSS or XPath selectors.
*   **Type Safety:** By using TypeScript and defining clear interfaces like `UserData`, we ensure that data structures are consistent throughout the application. This catches potential bugs at compile time rather than at runtime.
*   **Conventional Commits:** The commit history follows the Conventional Commits specification (e.g., `fix(SignUpPage): ...`, `feat(Login): ...`). This creates a clean, readable, and machine-parsable git history, which is invaluable for tracking changes and automating release notes.
*   **Readability:** Tests are written to be self-documenting. The steps in `registerUser.spec.js` read like a user story, making it easy for anyone on the team to understand the purpose of the test.

---

## Getting Started

Follow these steps to set up and run the test framework locally.

### Prerequisites

*   Node.js (v18 or higher)
*   An IDE like VS Code with the official Playwright extension.

### 1. Installation

Clone the repository and install the necessary dependencies.

```bash
git clone <your-repo-url>
cd <your-repo-directory>
npm install
```

Playwright requires installing browser binaries.

```bash
npx playwright install
```

### 2. Environment Configuration

Create a local environment file for development.

1.  Copy the example file:
    ```bash
    cp .env.example .env.dev
    ```
2.  Open `.env.dev` and fill in the required values, such as the `BASE_URL`.

### 3. Running Tests

You can run tests via the command line or using the VS Code Playwright extension.

**Run all tests:**

```bash
npx playwright test
```

**Run tests for a specific environment (e.g., staging):**

This command sets the `TEST_ENV` variable for the duration of the command.

```bash
TEST_ENV=staging npx playwright test
```

**Run a specific test file:**

```bash
npx playwright test src/tests/registerUser.spec.js
```

**Run tests in headed mode to watch the execution:**

```bash
npx playwright test --headed
```

**View the HTML Report:**

After a test run, a detailed report is generated.

```bash
npx playwright show-report
```
