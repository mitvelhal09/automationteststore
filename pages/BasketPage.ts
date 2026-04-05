import { Page, expect } from '@playwright/test';

export class BasketPage {
  constructor(private page: Page) {}
  
  private get qtyInput() {
    return this.page.locator('input[name*="quantity"]');
  }

  async updateQuantity(quantity: string) {
    await this.qtyInput.fill(quantity);
    await this.page.click('button[title="Update"]');
  }

  async getQuantity(){
    return await this.qtyInput.inputValue();    
  }

  async proceedToCheckout() {
    await this.page.waitForURL(/checkout\/cart/);

    const checkoutBtn = this.page.locator('a[title="Checkout"]').last();

    await checkoutBtn.waitFor({ state: 'visible' });
    await checkoutBtn.click();
  }

  async verifyTotalVisible() {
    await expect(this.page.locator('#totals_table')).toBeVisible();
  }

  async removeItem(){
  const checkoutBtn = this.page.locator('a[title="Checkout"]').last();

  }
}