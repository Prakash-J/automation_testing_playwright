import type { Page, Locator } from '@playwright/test';
import { ContactUsFormData } from '../interface/contactUsFormData';

export class ContactUsForm {
    readonly page: Page;
    readonly pageHeading: Locator;
    readonly name: Locator;
    readonly email: Locator;
    readonly subject: Locator;
    readonly message: Locator;
    readonly fileUploadButton: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageHeading = page.getByRole('heading', { name: 'Get In Touch' });
        this.name = page.getByRole('textbox', { name: 'Name' });
        this.email = page.getByRole('textbox', { name: 'Email', exact: true });
        this.subject = page.getByRole('textbox', { name: 'Subject' });
        this.message = page.getByRole('textbox', { name: 'Your Message Here' });
        this.fileUploadButton = page.getByRole('button', { name: 'Choose File' });
        this.submitButton = page.getByRole('button', { name: 'Submit' });
    }

    async startFillForm(formData: ContactUsFormData, filePath: string): Promise<void> {
        await this.name.fill(formData.name);
        await this.email.fill(formData.email);
        await this.subject.fill(formData.subject);
        await this.message.fill(formData.message);        
        await this.fileUploadButton.setInputFiles(filePath);
        await this.fileUploadButton.click();
    }

    async clickFormSubmitButton(): Promise<void> {
        await this.submitButton.click();
    }
}