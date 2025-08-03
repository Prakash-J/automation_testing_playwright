import { faker } from '@faker-js/faker';

import { test, expect } from '@playwright/test';

test('Register User', async ({ page }) => {
  await page.goto('/');
  const logo = page.locator('img[alt="Website for automation practice"]');
  await expect(logo).toHaveAttribute('alt', 'Website for automation practice');
  const naviBar = page.locator('.navbar-nav li');
  await expect(naviBar).toHaveCount(8);
  await page.getByRole('link', { name: 'Signup / Login' }).click();
  await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();
  const name = faker.person.fullName();
  await page.getByPlaceholder('Name').fill(name);
  const email = faker.internet.email();

  await page
    .locator('form')
    .filter({ hasText: 'Signup' })
    .getByPlaceholder('Email Address')
    .fill(email);
  await page.getByRole('button', { name: 'Signup' }).click();
  await expect(page.getByRole('heading', { name: 'Enter Account Information' })).toBeVisible();
  await page.getByRole('radio', { name: 'Mr.' }).click();
  await page.getByRole('textbox', { name: 'Password *' }).fill('asdfASDF!@#$');
  await page.locator('#days').selectOption('1');
  await page.locator('#months').selectOption('November');
  await page.locator('#years').selectOption('1994');
  await page.getByLabel('Sign up for our newsletter!').check();
  await page.getByLabel('Receive special offers from our partners!').check();
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  await page.getByRole('textbox', { name: 'First name *' }).fill(firstName);
  await page.getByRole('textbox', { name: 'Last name *' }).fill(lastName);
  await page.getByRole('textbox', { name: 'Company', exact: true }).fill('companyname');
  await page
    .getByRole('textbox', { name: 'Address * (Street address, P.' })
    .fill('prakash address first one');
  await page.getByRole('textbox', { name: 'Address 2' }).fill('prakash second address');
  await page.getByLabel('Country *').selectOption('India');
  await page.getByRole('textbox', { name: 'State *' }).fill('Tamil Nadu');
  await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('Chennai');
  await page.locator('#zipcode').fill('600056');
  await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('1234123412');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await expect(page.getByRole('heading', { name: 'Account Created!' })).toBeVisible();
  await page.getByRole('link', { name: 'Continue' }).click();
  await expect(page.getByText(` Logged in as ${name}`)).toBeVisible();
  await page.getByRole('link', { name: 'Delete Account' }).click();
  await expect(page.getByRole('heading', { name: 'Account Deleted!' })).toBeVisible();
  await page.getByRole('link', { name: 'Continue' }).click();
});
