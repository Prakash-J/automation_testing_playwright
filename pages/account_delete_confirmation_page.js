/**
 * Represents the account delete confirmation page
 * @class
 */
class AccountDeleteConfirmationPage {
  /**
   * @param {import('@playwright/test').page} page The Playwright page object
   */
  constructor(page) {
    this.accountDeleteConfirmation = page.getByRole('heading', { name: 'Account Deleted!' });
    this.continueButton = page.getByRole('link', { name: 'Continue' });
  }

  /**
   * Click continue button upon successful account deletion
   * @returns{Promise<void>}
   */
  async clickContinue() {
    await this.continueButton.click();
  }
}

export default AccountDeleteConfirmationPage;
