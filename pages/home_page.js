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
}

export default HomePage;
