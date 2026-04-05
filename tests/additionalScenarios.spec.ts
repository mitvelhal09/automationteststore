import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ProductPage } from '../pages/productPAge';
import { BasketPage } from '../pages/BasketPage';

test('Search - empty and valid results', async ({ page }) => {
  const home = new HomePage(page);
  
  await home.goto();
  await home.searchProduct('nonexistentproduct123');
  // Expect empty result message
  await expect(page.locator('.contentpanel')).toContainText('There is no product that matches the search criteria.');

  // Search for a valid product
  await home.searchProduct('Lipstick');
  await page.locator('.productname').first().waitFor();
  // Expect at least one product result
  const results = await home.getSearchResultsCount();
  expect(results).toBeGreaterThan(0);
});

test('Basket - remove and update item quantity', async ({ page }) => {
  const home = new HomePage(page);
  const product = new ProductPage(page);
  const basket = new BasketPage(page);
  
  await home.goto();
  await home.selectFirstProduct();

  // Add a product
  await product.addToCart();

  // Update the product quantity
  await basket.verifyTotalVisible();
  await basket.updateQuantity('2');

  // Check updated total
  const totalQuantity = await basket.getQuantity()
  expect(totalQuantity).toContain('2');

  // Remove item
  await page.locator('a:has(.fa-trash-o)').click();

  // Basket should now be empty
  await expect(page.locator('.contentpanel')).toContainText('Your shopping cart is empty!');
});