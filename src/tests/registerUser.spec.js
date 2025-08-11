/**
 * @fileoverview End-to-end tests for the user registration
 */

import { test, expect } from '../fixtures/registerUserFixture.ts';

/**
 * Test suite for the user registration feature
 */
test.describe('User Registration', () => {
  test('Register User', async ({
    userData,
    homePage,
    signUpPage,
    accountInformationPage,
    accountCreationConfirmationPage,
    accountDeletionConfirmationPage,
  }) => {
    // 1. Navigate to home page and verify it's loaded
    await homePage.goToHomePage();
    await expect(homePage.logo).toBeVisible();

    // 2. Click signupPage button and verify signupPage page loaded
    await homePage.selectNavigationLink(' Signup / Login');
    await expect(signUpPage.signUpPageTitle).toBeVisible();

    // 3. Start the signupPage process with a unique email
    await signUpPage.startSignup(userData.userFullName, userData.email);
    await expect(accountInformationPage.pageTitle).toBeVisible();

    // 4. Fill the account information
    await accountInformationPage.fillAccountDetails(userData);
    const successfulAccountCreation = accountCreationConfirmationPage.accountCreationConfirmation;
    await expect(successfulAccountCreation).toBeVisible();
    await accountCreationConfirmationPage.clickContinueButton();

    // 5. Validate successful login
    const loggedInUserLocator = await homePage.getLoggedInUserLocator(userData.userFullName);
    await expect(loggedInUserLocator).toBeVisible();

    // 6. Delete the created account
    await homePage.selectNavigationLink('Delete Account');
    const deletedAccountConfirmation =
      await accountDeletionConfirmationPage.deleteConfirmationMessage();
    await expect(deletedAccountConfirmation).toBeVisible();
    await accountDeletionConfirmationPage.clickContinue();
  });
});
