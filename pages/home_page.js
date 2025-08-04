/**
 * Represents the home page
 */
class HomePage {
  /**
   * @param {page} page The Playwright page object
   */
  constructor(page) {
    this.page = page;
    /**
     * The main logo of the website
     */
    this.logo = page.locator('img[alt="Website for automation practice"]');
    /**
     * The main navigation bar list items
     */
    this.navigationItems = page.locator('.navbar-nav li');
  }

  /**
   * Navigate to application's home page
   */
  async goToHomePage() {
    await this.page.goto('/');
  }

  /**
   * Click specific link in the main navigation bar
   * @param {string} linkName The visible text of the link to be clicked (eg. 'Signup')
   */
  async selectNavigationLink(linkName) {
    await this.page.getByRole('link', { name: linkName }).click();
  }

  /**
   * Display the logged in used name on the home page
   * @param {string} name Logged in user name displayed in the home page
   * Gets the locator for the 'Logged in as' element.
   * This is useful for assertions to verify a user is logged in.
   * @param {string} name The username expected to be displayed.
   * @returns {import('@playwright/test').Locator} The locator for the element.
   */
  async getLoggedInUserLocator(name) {
    return this.page.getByText(` Logged in as ${name}`);
  }
}

export default HomePage;
