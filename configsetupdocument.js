/* eslint-disable */
project-root/
├── config/
│   ├── dev.js
│   ├── staging.js
│   └── prod.js
│
├── data/
│   ├── devData.js
│   ├── stagingData.js
│   └── prodData.js
│
├── tests/
│   └── user-registration.spec.js
│
├── utils/
│   └── loadEnvConfig.js
│
├── .env                   # default dev
├── .env.dev               # optional override for dev
├── .env.staging           # staging secrets
├── .env.prod              # prod secrets (do NOT commit)
├── .env.example           # safe sample with placeholders
│
├── .gitignore             # should ignore .env.* with secrets
├── playwright.config.js
├── package.json
└── README.md

// config/dev.js
export default {
  featureFlags: {
    enableBetaUI: true,
  },
  timeout: 20000,
};

// config/prod.js
export default {
  featureFlags: {
    enableBetaUI: false,
  },
  timeout: 30000,
};

// data/devData.js
import { faker } from '@faker-js/faker';
const dob = faker.date.birthdate({ min: 18, max: 60, mode: 'age' });
export default {
  name: faker.person.fullName(),
  email: faker.internet.email(),
  password: faker.internet.password(12),
  day: dob.getDate().toString(),
  month: dob.toLocaleString('default', { month: 'long' }),
  year: dob.getFullYear().toString(),
};

// data/prodData.js
export default {
  name: 'Prod Test Account',
  email: process.env.PROD_USER_EMAIL,
  password: process.env.PROD_USER_PASSWORD,
  day: '01',
  month: 'January',
  year: '1980',
};

// utils/loadEnvConfig.js
import dotenv from 'dotenv';
import path from 'path';
const env = process.env.TEST_ENV || 'dev';
dotenv.config({ path: path.resolve(process.cwd(), `.env.${env}`) });
export const getEnvConfig = async () => {
  const config = await import(`../config/${env}.js`);
  const testData = await import(`../data/${env}Data.js`);
  return { config: config.default, testData: testData.default };
};

// tests/user-registration.spec.js
import { test, expect } from '@playwright/test';
import { getEnvConfig } from '../utils/loadEnvConfig.js';

test('User Registration Test', async ({ page }) => {
  const { config, testData } = await getEnvConfig();
  await page.goto(process.env.BASE_URL);
  await page.getByPlaceholder('Email').fill(testData.email);
  await page.getByPlaceholder('Password').fill(testData.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/dashboard/);
});

// .env.example
TEST_ENV=dev
BASE_URL=https://dev.example.com
PROD_USER_EMAIL=readonly@example.com
PROD_USER_PASSWORD=yourpasswordhere

// .gitignore
.env*
!*.example
