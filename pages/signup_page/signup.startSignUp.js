import { expect } from '@playwright/test';

class Signup {
  constructor(page) {
    this.signUpPageConfirmation = page.getByRole('heading', { name: 'New User Signup!' });
    this.name = page.getByPlaceholder('Name');
  }

  async verifySignupPageVisible() {
    await expect(this.signUpPageConfirmation).toBeVisible();
  }

  async fillSingUpName(name) {
    await this.name.fille(name);
  }
}

export default Signup;
