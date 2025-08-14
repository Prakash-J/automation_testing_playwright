/**
 * @file End-to-end tests for the user registration
 */

import userDataRaw from '../data/devData.ts';
import { test, expect } from '../fixtures/authenticationFixture.ts';
import testHelper from '../helper/testHelper.ts';

const userData = userDataRaw;

test.describe.configure({
  mode: 'default',
});

/**
 * Test suite for the user registration feature
 */
test.describe('User Authentication', () => {
  test.describe.configure({ mode: 'default' });
  test('SignUp and Fill Account Information', async ({
    homePage,
    signUpOrLoginPage,
    accountInformationPage,
    accountCreationConfirmationPage,
  }) => {
    await testHelper.navigateToHomeClickSignUpOrLoginButton(homePage, signUpOrLoginPage, 'signup');

    await signUpOrLoginPage.startSignup(userData.userFullName, userData.email);
    await expect(accountInformationPage.pageTitle).toBeVisible();

    await accountInformationPage.fillAccountDetails(userData);
    const successfulAccountCreation = accountCreationConfirmationPage.accountCreationConfirmation;
    await expect(successfulAccountCreation).toBeVisible();
    await accountCreationConfirmationPage.clickContinueButton();

    await testHelper.checkUserNameInHomePage(homePage, userData.userFullName);
  });

  test('Login Existing User and Delete', async ({
    homePage,
    signUpOrLoginPage,
    accountDeletionConfirmationPage,
  }) => {
    await testHelper.navigateToHomeClickSignUpOrLoginButton(homePage, signUpOrLoginPage, 'login');

    await signUpOrLoginPage.startLogin(userData.email, userData.password);

    await testHelper.checkUserNameInHomePage(homePage, userData.userFullName);
    await homePage.selectNavigationLink('Delete Account');
    const deletedAccountConfirmation =
      await accountDeletionConfirmationPage.deleteConfirmationMessage();
    await expect(deletedAccountConfirmation).toBeVisible();
    await accountDeletionConfirmationPage.clickContinue();
  });
});

test.describe('Invalid Login', () => {
  test('Incorrect Email and Password', async ({ homePage, signUpOrLoginPage }) => {
    await testHelper.navigateToHomeClickSignUpOrLoginButton(homePage, signUpOrLoginPage, 'login');
    await signUpOrLoginPage.startLogin(userData.email, userData.password);
    await expect(signUpOrLoginPage.incorrectAuthErrorMessage).toBeVisible();
  });
});
