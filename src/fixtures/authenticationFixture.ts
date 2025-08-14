import { test as base, expect } from '@playwright/test';

import { HomePage } from '../pages/home_page';
import { SignUpOrLoginPage } from '../pages/start_signup_or_login_page';
import { AccountCreationConfirmationPage } from '../pages/account_creation_confirmation_page';
import { AccountInformationPage } from '../pages/account_information_page';
import { AccountDeleteConfirmationPage } from '../pages/account_delete_confirmation_page';

type registerUserFixture = {
    homePage: HomePage;
    signUpOrLoginPage: SignUpOrLoginPage;
    accountInformationPage: AccountInformationPage;
    accountCreationConfirmationPage: AccountCreationConfirmationPage;
    accountDeletionConfirmationPage: AccountDeleteConfirmationPage
}

const test = base.extend<registerUserFixture>({

    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },

    signUpOrLoginPage: async ({ page }, use) => {
        const signUpOrLoginPage = new SignUpOrLoginPage(page);
        await use(signUpOrLoginPage);
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
