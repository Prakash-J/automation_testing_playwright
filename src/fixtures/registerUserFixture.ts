import { test as base, expect } from '@playwright/test';

import { HomePage } from '../pages/home_page';
import { SignUpPage } from '../pages/start_signup_page';
import { AccountCreationConfirmationPage } from '../pages/account_creation_confirmation_page';
import { AccountInformationPage } from '../pages/account_information_page';
import { AccountDeleteConfirmationPage } from '../pages/account_delete_confirmation_page';
import userData from '../data/devData';
import { UserData } from '../interface/userData';

type registerUserFixture = {
    homePage: HomePage;
    signUpPage: SignUpPage;
    userData: UserData;
    accountInformationPage: AccountInformationPage;
    accountCreationConfirmationPage: AccountCreationConfirmationPage;
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

    accountInformationPage: async ({ page }, use) => {
        const accountInformationPage = new AccountInformationPage(page);
        await use(accountInformationPage);
    },

    accountCreationConfirmationPage: async ({ page }, use) => {
        const accountCreationConfirmationPage = new AccountCreationConfirmationPage(page);
        await use(accountCreationConfirmationPage);
    },

    accountDeletionConfirmationPage: async ({ page }, use) => {
        const accountDeletionConfirmationPage = new AccountDeleteConfirmationPage(page);
        await use(accountDeletionConfirmationPage);
    },
})

export { test, expect };
