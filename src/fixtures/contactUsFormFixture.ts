import { test as base, expect } from '@playwright/test';
import { ContactUsForm } from '../pages/contact_us_form_page';
import { HomePage } from '../pages/home_page';

type contactUsFormFixture = {
    contactUsForm: ContactUsForm;
    homePage: HomePage;
}

const test = base.extend<contactUsFormFixture>({
    contactUsForm: async ({ page }, use) => {
        const contactUsForm = new ContactUsForm(page);
        await use(contactUsForm)
    },

    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    }
});

export { test, expect };