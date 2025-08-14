import { expect } from '@playwright/test';
import { HomePage } from '../pages/home_page';
import { SignUpOrLoginPage } from '../pages/start_signup_or_login_page';

async function navigateToHomeClickSignUpOrLoginButton(homePage: HomePage, signUpOrLoginPage: SignUpOrLoginPage, title: string): Promise<void> {
    await homePage.goToHomePage();
    await expect(homePage.logo).toBeVisible();

    await homePage.selectNavigationLink(' Signup / Login');
    await expect(signUpOrLoginPage.getTitle(title)).toBeVisible();
}

async function checkUserNameInHomePage(homePage: HomePage, userFullName: string) {
    const loggedInUserLocator = await homePage.getLoggedInUserLocator(userFullName);
    await expect(loggedInUserLocator).toBeVisible();
}

export default {
    navigateToHomeClickSignUpOrLoginButton,
    checkUserNameInHomePage,
}