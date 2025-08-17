import { test as base, expect } from '@playwright/test';

import { HomePage } from '../pages/home_page';
import { ProductsPage } from '../pages/products_page';

type productFixture = {
    homePage: HomePage;
    productPage: ProductsPage;
}

const test = base.extend<productFixture>({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },

    productPage: async ({ page }, use) => {
        const productPage = new ProductsPage(page);
        await use(productPage);
    }
});

export { test, expect }