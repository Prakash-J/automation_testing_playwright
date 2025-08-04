/**
 * Represents the initial user singup page act
 */
class Signup {
  /**
   * @param {import('@playwright/test').page} page
   */
  constructor(page) {
    this.signUpPageTitle = page.getByRole('heading', { name: 'New User Signup!' });
    this.name = page.getByPlaceholder('Name');
    this.email = page
      .locator('form')
      .filter({ hasText: 'Signup' })
      .getByPlaceholder('Email Address');
    this.singupButton = page.getByRole('button', { name: 'Signup' });
  }

  /**
   * Fills the singup form with the name and email and click submit button
   * @param {string} name The user's name for signup.
   * @param {string} email The user's email for signup.
   */
  async startSingup(name, email) {
    await this.name.fill(name);
    await this.email.fill(email);
    await this.singupButton.click();
  }
}

export default Signup;
