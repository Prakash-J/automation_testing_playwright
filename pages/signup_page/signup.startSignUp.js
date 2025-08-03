import { expect } from '@playwright/test';

class Signup {
  constructor(page) {
    this.signUpPageConfirmation = page.getByRole('heading', { name: 'New User Signup!' });
    this.name = page.getByPlaceholder('Name');
    this.email = page
      .locator('form')
      .filter({ hasText: 'Signup' })
      .getByPlaceholder('Email Address');
  }

  async verifySignupPageVisible() {
    await expect(this.signUpPageConfirmation).toBeVisible();
  }

  async fillSingUpName(name) {
    await this.name.fill(name);
  }

  async fillEmail(email) {
    await this.email.fill(email);
  }
}

export default Signup;
