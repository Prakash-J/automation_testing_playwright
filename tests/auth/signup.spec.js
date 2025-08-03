import { test, expect } from '@playwright/test';

class Signup {
  constructor(page) {
    this.signUpPageConfirmation = page.getByRole('heading', { name: 'New User Signup!' });
  }

  async checkSignupVisible() {
    await expect(this.signUpPageConfirmation).toBeVisible();
  }
}

export default Signup;
