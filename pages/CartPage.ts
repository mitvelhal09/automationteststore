import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async updateQuantity(qty: string) {
    const qtyInput = this.page.locator('input[name*="quantity"]');
    await qtyInput.fill(qty);
    await this.page.click('button[title="Update"]');
  }

  async proceedToCheckout() {
    await this.page.click('a:has-text("Checkout")');
  }

  async verifyCartNotEmpty() {
    await expect(this.page.locator('.cart')).toBeVisible();
  }
}