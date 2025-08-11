import type { Page, Locator } from '@playwright/test';
import { UserData } from '../interface/userData';

export class AccountInformation {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly password: Locator;
    readonly day: Locator;
    readonly month: Locator;
    readonly year: Locator;
    readonly newsLetterSignUp: Locator;
    readonly receiveSpecialOffer: Locator;
    readonly userFirstName: Locator;
    readonly userLastName: Locator;
    readonly company: Locator;
    readonly addressOne: Locator;
    readonly addressTwo: Locator;
    readonly country: Locator;
    readonly state: Locator;
    readonly city: Locator;
    readonly zipcode: Locator;
    readonly mobileNumber: Locator;
    readonly createAccountButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.getByRole('heading', { name: 'Enter Account Information' });
        this.password = page.getByRole('textbox', { name: 'Password *' });
        this.day = page.locator('#days');
        this.month = page.locator('#months');
        this.year = page.locator('#years');
        this.newsLetterSignUp = page.getByLabel('Sign up for our newsletter!');
        this.receiveSpecialOffer = page.getByLabel('Receive special offers from our partners!');
        this.userFirstName = page.getByRole('textbox', { name: 'First name *' });
        this.userLastName = page.getByRole('textbox', { name: 'Last name *' });
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

    async fillAccountDetails(userData: UserData) {
        await this.page
        .getByRole('radio', { name: userData.salutation })
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
      await this.userFirstName.fill(userData.userFirstName);
      await this.userLastName.fill(userData.userLastName);
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