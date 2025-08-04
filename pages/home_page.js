/**
 * Represents the home page
 */
class HomePage {
  /**
   * @param {page} page
   */
  constructor(page) {
    this.page = page;
    this.logo = page.locator('img[alt="Website for automation practice"]');
    this.navigationItems = page.locator('.navbar-nav li');
  }

  /**
   * Navigate to home page
   */
  async goToHomePage() {
    await this.page.goto('/');
  }

  /**
   * Select the navigation bar link
   * @param {linkName} linkName The navigation bar link name to be clicked
   */
  async selectNavigationLink(linkName) {
    await this.page.getByRole('link', { name: linkName }).click();
  }
}

export default HomePage;
