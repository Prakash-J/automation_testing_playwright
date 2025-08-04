/**
 * Represents the user account information gathering
 * @class
 */
class AccountInformation {
  /**
   * @param {import('@playwright/test').page} page The Playwright page object
   */
  constructor(page) {
    this.page = page;
    this.password = page.getByRole('textbox', { name: 'Password *' });
    this.day = page.locator('#days');
    this.month = page.locator('#months');
    this.year = page.locator('#years');
    this.newsLetterSignUp = page.getByLabel('Sign up for our newsletter!');
    this.receiveSpecialOffer = page.getByLabel('Receive special offers from our partners!');
    this.firstName = page.getByRole('textbox', { name: 'First name *' });
    this.lastName = page.getByRole('textbox', { name: 'Last name *' });
    this.company = page.getByRole('textbox', { name: 'Company', exact: true });
    this.addressOne = page.getByRole('textbox', { name: 'Address * (Street address, P.' });
    this.addressTwo = page.getByRole('textbox', { name: 'Address 2' });
    this.country = page.getByLabel('Country *');
    this.state = page.getByRole('textbox', { name: 'State *' });
    this.city = page.getByRole('textbox', { name: 'City * Zipcode *' });
    this.zipcode = page.locator('#zipcode');
    this.mobileNumber = page.getByRole('textbox', { name: 'Mobile Number *' });
    this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
  }

  /**
   * Fills in the account creation form using the provided user data.
   * @param {object} userData - The user data object containing account details.
   * @param {'Mr' | 'Ms'} userData.salutation - The user's salutation (e.g., 'Mr' or 'Ms').
   * @param {string} userData.password - The user's password.
   * @param {string} userData.day - The day of birth (value of the day dropdown).
   * @param {string} userData.month - The month of birth (value of the month dropdown).
   * @param {string} userData.year - The year of birth (value of the year dropdown).
   * @param {boolean} userData.newsLetterSignUp - Whether the user wants to sign up for newsletters.
   * @param {boolean} userData.receiveSpecialOffer - Whether the user wants to receive special offers.
   * @param {string} userData.firstName - First name.
   * @param {string} userData.lastName - Last name.
   * @param {string} userData.company - Company name.
   * @param {string} userData.addressOne - Address line 1.
   * @param {string} userData.addressTwo - Address line 2.
   * @param {string} userData.country - Country (value of the country dropdown).
   * @param {string} userData.state - State or region.
   * @param {string} userData.city - City.
   * @param {string} userData.zipcode - Zip/postal code.
   * @param {string} userData.mobileNumber - Mobile phone number.
   * @returns {Promise<void>} Resolves when form is completed and submitted.
   */
  async fillAccountDetails(userData) {
    await this.page
      .getByRole('radio', { name: userData.salutation === 'Mr' ? 'Mr.' : 'Ms.' })
      .click();
    await this.password.fill(userData.password);
    await this.day.selectOption(userData.day);
    await this.month.selectOption(userData.month);
    await this.year.selectOption(userData.year);
    if (userData.newsLetterSignUp) {
      this.newsLetterSignUp.check();
    }
    if (userData.receiveSpecialOffer) {
      this.receiveSpecialOffer.check();
    }
    await this.firstName.fill(userData.firstName);
    await this.lastName.fill(userData.lastName);
    await this.company.fill(userData.company);
    await this.addressOne.fill(userData.addressOne);
    await this.addressTwo.fill(userData.addressTwo);
    await this.country.selectOption(userData.country);
    await this.state.fill(userData.state);
    await this.city.fill(userData.city);
    await this.zipcode.fill(userData.zipcode);
    await this.mobileNumber.fill(userData.mobileNumber);
    await this.createAccountButton.click();
  }
}

export default AccountInformation;
