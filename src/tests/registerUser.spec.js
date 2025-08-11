/**
 * @fileoverview End-to-end tests for the user registration
 */

import { test, expect } from '../fixtures/registerUserFixture.ts';

/**
 * Test suite for the user registration feature
 */
test.describe('User Registration', () => {
  test('Register User', async ({ homePage }) => {
    // 1. Navigate to home page and verify it's loaded
    await homePage.goToHomePage();
    await expect(homePage.logo).toBeVisible();

    // 3. Click signupPage button and verify signupPage page loaded
    // await homePage.selectNavigationLink(' Signup / Login');
    // await expect(signupPage.signUpPageTitle).toBeVisible();

    // // 4. Start the signupPage process with a unique email
    // await signupPage.startSingup(user.name.full, user.contact.email);
    // await expect(accountInfoPage.pageTitle).toBeVisible();
  });
});
