import type { Page, Locator } from '@playwright/test';

export class AccountCreationConfirmation {
    readonly accountCreationConfirmation: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
        this.accountCreationConfirmation = page.getByRole('heading', { name: 'Account Created!' });
        this.continueButton = page.getByRole('link', { name: 'Continue' });
    }

    async confirmationMessage(): Promise<Locator> {
        return this.accountCreationConfirmation
    }
    
    async clickContinueButton(): Promise<void> {
        await this.continueButton.click();
    }
}