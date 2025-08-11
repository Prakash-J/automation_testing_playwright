import type { Page, Locator } from '@playwright/test';
import { UserData } from '../interface/userData'

/**
 * Represents the Sign-Up page of the website.
 * Provides methods to interact with the elements on the page such as the title, form fields, and the sign-up button.
 */
export class SignUpPage {
    readonly signUpPageTitle: Locator;
    readonly name: Locator;
    readonly email: Locator;
    readonly singUpButton: Locator;

    /**
     * Creates an instance of the SignUpPage class.
     * Initializes the locators for all the elements on the sign-up page.
     * 
     * @param {Page} page - The Playwright Page object representing the page in the browser.
     */
    constructor(page: Page) {
        this.signUpPageTitle = this.signUpPageTitle = page.getByRole('heading', { name: 'New User Signup!' });
        this.name = page.getByPlaceholder('Name');
        this.email = page
            .locator('form')
            .filter({ hasText: 'Signup' })
            .getByPlaceholder('Email Address');
        this.singUpButton = page.getByRole('button', { name: 'Signup' });
    }

    /**
     * Fills the name and email fields and clicks the sign-up button.
     * 
     * @param {string} userName - The name to fill in the name input field.
     * @param {string} userEmail - The email to fill in the email input field.
     * @returns {Promise<void>} Resolves when the sign-up action is completed.
     */
    async startSignup(userData: UserData): Promise<void>{
        await this.name.fill(userData.userFullName);
        await this.email.fill(userData.email);
        await this.singUpButton.click();
    }
}
