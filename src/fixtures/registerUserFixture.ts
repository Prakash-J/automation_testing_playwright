import { test as base, expect } from '@playwright/test';

import { HomePage } from '../pages/home_page';
import { SignUpPage } from '../pages/start_signup_page';
import { AccountCreationConfirmation } from '../pages/account_creation_confirmation_page';
import { AccountInformation } from '../pages/account_information_page';
import { AccountDeleteConfirmationPage } from '../pages/account_delete_confirmation_page';
import userData from '../data/devData';
import { UserData } from '../interface/userData';

type registerUserFixture = {
    homePage: HomePage;
    signUpPage: SignUpPage;
    userData: UserData;
    accountInformation: AccountInformation;
    accountCreationConfirmationPage: AccountCreationConfirmation;
    accountDeletionConfirmationPage: AccountDeleteConfirmationPage
}
const test = base.extend<registerUserFixture>({
    userData: async ({}, use) => {
        await use(userData);
    },

    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },

    signUpPage: async ({ page }, use) => {
        const signUpPage = new SignUpPage(page);
        await use(signUpPage);
    },

    accountInformation: async ({ page }, use) => {
        const accountInformation = new AccountInformation(page);
        await use(accountInformation);
    },

    accountCreationConfirmationPage: async ({ page }, use) => {
        const accountCreationConfirmationPage = new AccountCreationConfirmation(page);
        await use(accountCreationConfirmationPage);
    },

    accountDeletionConfirmationPage: async ({ page }, use) => {
        const accountDeletionConfirmationPage = new AccountDeleteConfirmationPage(page);
        await use(accountDeletionConfirmationPage);
    },
})

export { test, expect };
