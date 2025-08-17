import type { Page, Locator } from '@playwright/test';

export class ProductsPage{
    readonly pageTitle: Locator;
    readonly page: Page;
    readonly viewProductButton: Locator
    readonly productPrice: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.getByRole('heading', { name: 'All Products' });
        this.viewProductButton = this.page.locator('a[href^="/product_details/"]');
        this.productPrice = this.page.getByText('Rs.');
    }

    async clickViewProduct(productNumber: number) {
        await this.viewProductButton.nth(productNumber).click(); 
    }

    checkProductName(productName: string){
        return this.page.getByRole('heading', { name: productName });
    }

    checkProductPrice() {
        return this.productPrice;
    }

    checkProductAvailability(availabilityStatus: string){
        return this.page.getByText(`Availability: ${availabilityStatus}`);
    }

    checkProductCondition(conditionStatus: string){
        return this.page.getByText(`Condition: ${conditionStatus}`);
    }

    checkProductBrand(brand: string){
        return this.page.getByText(`Brand: ${brand}`);
    }

    checkPageTitle(){
        return this.pageTitle;
    }
}