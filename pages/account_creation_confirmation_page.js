/**
 * Represents the account creation confirmation page
 * @class
 */
class AccountCreationConfirmation {
  /**
   * @param {import('@playwright/test').page} page The Playwright page object
   * @constructor
   */
  constructor(page) {
    this.confirmationTitle = page.getByRole('heading', { name: 'Account Created!' });
    this.continueButton = page.getByRole('link', { name: 'Continue' });
  }

  /**
   * Clicks the 'Continue' button to proceed after account creation
   * @returns {Promise<void>}
   */
  async clickContinue() {
    await this.continueButton.click();
  }
}

export default AccountCreationConfirmation;
