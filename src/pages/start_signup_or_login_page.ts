import type { Page, Locator } from '@playwright/test';

/**
 * Represents the Sign-Up page of the website.
 * Provides methods to interact with the elements on the page such as the title, form fields, and the sign-up button.
 */
export class SignUpOrLoginPage {
    readonly signUpTitle: Locator;
    readonly signUpName: Locator;
    readonly signUpEmail: Locator;
    readonly singUpButton: Locator;
    readonly loginTitle: Locator;
    readonly loginEmail: Locator;
    readonly loginPassword: Locator;
    readonly loginButton: Locator;

    /**
     * Creates an instance of the SignUpPage class.
     * Initializes the locators for all the elements on the sign-up page.
     * 
     * @param {Page} page - The Playwright Page object representing the page in the browser.
     */
    constructor(page: Page) {
        this.signUpTitle = this.signUpTitle = page.getByRole('heading', { name: 'New User Signup!' });
        this.loginTitle = this.loginTitle = page.getByRole('heading', { name: 'New User Signup!' });
        this.signUpName = page.getByRole('textbox', { name: 'Name' })
        this.signUpEmail = page
            .locator('form')
            .filter({ hasText: 'Signup' })
            .getByPlaceholder('Email Address');
        this.singUpButton = page.getByRole('button', { name: 'Signup' });
        this.loginEmail = page
            .locator('form')
            .filter({ hasText: 'Login' })
            .getByPlaceholder('Email Address');
        this.loginPassword = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    /**
     * Fills the name and email fields and clicks the sign-up button.
     * 
     * @param {string} userName - The name to fill in the name input field.
     * @param {string} userEmail - The email to fill in the email input field.
     * @returns {Promise<void>} Resolves when the sign-up action is completed.
     */
    async startSignup(userFullName: string, email: string): Promise<void>{
        await this.signUpName.fill(userFullName);
        await this.signUpEmail.fill(email);
        await this.singUpButton.click();
    }

    async startLogin(email: string, password: string): Promise<void> {
        await this.loginEmail.fill(email);
        await this.loginPassword.fill(password);
        await this.loginButton.click();
    }

    getTitle(title: string) {
        return (title === 'login') ? this.loginTitle : this.signUpTitle;
    }
}
