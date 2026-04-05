import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { CheckoutPage } from '../pages/checkOutPage';
import { ProductPage } from '../pages/productPAge';
import { BasketPage } from '../pages/BasketPage';
import { guestUser } from '../utils/testData';

test.describe('Guest Checkout Flow', () => {

  test('Happy path - successful guest checkout', async ({ page }) => {

    const home = new HomePage(page);
    const product = new ProductPage(page);
    const basket = new BasketPage(page);
    const checkout = new CheckoutPage(page);

    await home.goto();
    await home.selectFirstProduct();

    await product.addToCart();

    await basket.verifyTotalVisible();
    await basket.updateQuantity('2');
    await basket.proceedToCheckout();

    await checkout.selectGuestCheckout();
    await checkout.fillGuestDetails(guestUser);
    await checkout.continueCheckout();
    await checkout.confirmOrder();

    await checkout.verifyOrderSuccess();
  });

  test('Validation - required fields', async ({ page }) => {
    const home = new HomePage(page);
    const product = new ProductPage(page);
    const basket = new BasketPage(page);
    const checkout = new CheckoutPage(page);

    await home.goto();
    await home.selectFirstProduct();

    await product.addToCart();

    await basket.proceedToCheckout();

    await checkout.selectGuestCheckout();
    await checkout.continueCheckout();

    const errors = page.locator('.form-group.has-error');
    await expect(errors).toHaveCount(6);
  });

  test('Basket update reflects total', async ({ page }) => {
    const home = new HomePage(page);
    const product = new ProductPage(page);
    const basket = new BasketPage(page);

    await home.goto();
    await home.selectFirstProduct();

    await product.addToCart();

    await basket.updateQuantity('3');
    await basket.verifyTotalVisible();
  });

});
