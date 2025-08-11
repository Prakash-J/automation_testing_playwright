import type { Page, Locator } from '@playwright/test';
import { UserData } from '../interface/userData';

/**
 * Represents the Home page of the website and provides methods to interact with elements on the page.
 * Provides functionalities like navigating to the home page, selecting navigation links, and retrieving user-related elements.
 */
export class HomePage{
    readonly logo: Locator;
    readonly navigationItems: Locator;
    readonly page: Page;

    /**
     * Creates an instance of the HomePage class.
     * Initializes the locators for the logo and navigation items.
     * 
     * @param {Page} page - The Playwright Page object representing the page in the browser.
     */
    constructor(page: Page) {
        this.page = page;
        this.logo = page.locator('img[alt="Website for automation practice"]');
        this.navigationItems = this.navigationItems = page.locator('.navbar-nav li');
    }

     /**
     * Navigates to the home page of the website by going to the root URL.
     * 
     * @returns {Promise<void>} Resolves when the navigation is completed.
     */
    async goToHomePage(): Promise<void> {
        await this.page.goto('/');
    }

    /**
     * Selects and clicks a navigation link by its name.
     * 
     * @param {string} linkName - The name of the navigation link to select.
     * @returns {Promise<void>} Resolves when the link is clicked and navigation is initiated.
     */
    async selectNavigationLink(linkName: string): Promise<void> {
        await this.page.getByRole('link', { name: linkName }).click();
    }
    /**
     * Returns a locator for the logged-in user element on the page.
     * This is used to verify the current logged-in user.
     * 
     * @param {string} userName - The name of the user to locate.
     * @returns {Locator} A locator for the logged-in user text element.
     */
    async getLoggedInUserLocator(userData: UserData): Promise<Locator> {
        return this.page.getByText(` Logged in as ${userData.userFullName}`);
    }
}