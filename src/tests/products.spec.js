import { test, expect } from '../fixtures/productFixture.ts';

test.describe('Product', () => {
  test('Verify All Products and product detail page', async ({ homePage, productPage }) => {
    await homePage.goToHomePage();
    await homePage.selectNavigationLink(' Products');
    await expect(productPage.checkPageTitle()).toBeVisible();
    await productPage.clickViewProduct(0);
    await expect(productPage.checkProductName('Blue Top')).toBeVisible();
    await expect(productPage.checkProductPrice()).toBeVisible();
    await expect(productPage.checkProductAvailability('In Stock')).toBeVisible();
    await expect(productPage.checkProductCondition('New')).toBeVisible();
    await expect(productPage.checkProductBrand('Polo')).toBeVisible();
  });
});
