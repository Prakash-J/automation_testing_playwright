import type { Page, Locator } from '@playwright/test';

export class AccountDeleteConfirmationPage {
    readonly accountDeleteConfirmation: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
        this.accountDeleteConfirmation = page.getByRole('heading', { name: 'Account Deleted!' });
        this.continueButton = page.getByRole('link', { name: 'Continue' });
    }

    async deleteConfirmationMessage(): Promise<Locator> {
        return this.accountDeleteConfirmation
    }

    async clickContinue(): Promise<void> {
        await this.continueButton.click();
    }
}