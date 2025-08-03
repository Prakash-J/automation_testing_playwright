# 🧪 Playwright Automation Framework - AutomationExercise

## 📌 Project Description

This project is a high-standard, scalable, and modular end-to-end test automation framework built with [Playwright](https://playwright.dev/) and JavaScript. It targets the UI flow of [AutomationExercise](https://automationexercise.com/) to ensure consistent regression coverage and fast feedback during development.

---

## 🏗️ Tech Stack

| Layer             | Technology                     |
| ----------------- | ------------------------------ |
| Test Framework    | Playwright                     |
| Language          | JavaScript (ES6+)              |
| Test Runner       | Playwright Test                |
| CI/CD Integration | GitHub Actions (recommended)   |
| Reporting         | Allure Reports / HTML Reporter |
| Linting           | ESLint (Airbnb Rules)          |
| Formatter         | Prettier                       |
| Assertions        | Playwright built-in expect     |

---

## 📂 Folder Structure

\`\`\`
playwright-tests/
├── tests/ # Test specs (UI)
│ └── home.spec.js
├── pages/ # Page Object Models
│ └── HomePage.js
├── utils/ # Helper functions
│ └── logger.js
├── fixtures/ # Test data & config
│ └── testData.json
├── reports/ # Test result artifacts
├── .github/workflows/ # CI configurations
├── .eslintrc.json # ESLint config
├── playwright.config.js # Playwright config
├── package.json
└── README.md
\`\`\`

---

## 🔧 Installation & Setup

1. **Clone the Repo**
   \`\`\`bash
   git clone https://github.com/yourname/playwright-automationexercise.git
   cd playwright-automationexercise
   \`\`\`

2. **Install Dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run Tests**
   \`\`\`bash
   npx playwright test
   \`\`\`

4. **Generate HTML Report**
   \`\`\`bash
   npx playwright show-report
   \`\`\`

---

## ✅ Standards to Follow

### 🔁 Testing Standards

- **Atomic Tests**: Each test must validate one independent feature.
- **Idempotent Tests**: Tests should be repeatable and deterministic.
- **Prioritize Locators**: Use \`data-testid\` or stable attributes. Avoid XPath.
- **Headless + Headed Modes**: Ensure tests run in both environments.
- **Cross-Browser Testing**: Test against Chromium, Firefox, and WebKit.
- **Tagging**: Use tags like \`@smoke\`, \`@regression\` to filter test runs.

### 📄 Code Quality Standards

- **Linting**: Airbnb JavaScript style via ESLint
- **Formatting**: Use Prettier with a unified code style
- **Naming**: camelCase for variables, PascalCase for classes, snake_case for files
- **Comments**: Use JSDoc for public methods and utilities

### 🧱 Page Object Model (POM)

Each page (e.g., \`HomePage.js\`) should:

- Encapsulate selectors
- Provide reusable functions (e.g., \`clickLoginButton()\`)
- Avoid direct assertions—assert only in test specs

### 🔐 Security & Privacy

- Mask sensitive data like tokens in logs
- Do not commit \`.env\` or credential files

---

## 🧪 Sample Test (tests/home.spec.js)

\`\`\`js
import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';

test.describe('Home Page Tests', () => {
test('should load the homepage correctly', async ({ page }) => {
const homePage = new HomePage(page);
await homePage.goto();
await expect(homePage.logo).toBeVisible();
});
});
\`\`\`

---

## 📘 Sample Page Object (pages/HomePage.js)

\`\`\`js
export default class HomePage {
constructor(page) {
this.page = page;
this.logo = page.locator('img[alt="Website for automation practice"]');
this.signupButton = page.locator('a[href="/signup"]');
}

async goto() {
await this.page.goto('https://automationexercise.com/');
}

async clickSignup() {
await this.signupButton.click();
}
}
\`\`\`

---

## 🚀 CI/CD Example (GitHub Actions)

\`\`\`yaml
name: Playwright Tests

on:
push:
branches: [main]

jobs:
test:
runs-on: ubuntu-latest
steps: - uses: actions/checkout@v3 - uses: actions/setup-node@v3
with:
node-version: 18 - run: npm install - run: npx playwright install --with-deps - run: npx playwright test
\`\`\`

---

## 📊 Reporting

- Enable HTML Reports (default in Playwright)
- For advanced needs, integrate [Allure](https://docs.qameta.io/allure/)

\`\`\`bash
npx allure generate ./allure-results --clean -o ./allure-report
npx allure open ./allure-report
\`\`\`

---

## 👨‍🔧 Best Practices

| Area           | Best Practice                                                            |
| -------------- | ------------------------------------------------------------------------ |
| Locators       | Prefer \`data-testid\`, \`aria-label\`, or unique CSS selectors          |
| Test Isolation | Use \`beforeEach\` to navigate; do not depend on test ordering           |
| Retry Logic    | Use Playwright's built-in retry config in \`playwright.config.js\`       |
| Assertions     | Assert only once per test, and use \`toHaveText\`, \`toBeVisible\`, etc. |
| Maintenance    | Keep locators in Page Objects, and abstract repetitive flows to utils    |

---

## 📈 Scalability Tips

- Organize tests by feature (e.g., \`/tests/login/\`, \`/tests/cart/\`)
- Integrate with BrowserStack/SauceLabs for cross-browser grid
- Use environment variables (\`process.env\`) for base URLs and test configs
- Use parallel test execution (\`npx playwright test --project=chromium\`)

---

## 📞 Support

For any issues or contributions, raise an issue or contact the maintainer.

---

## 📄 License

MIT
