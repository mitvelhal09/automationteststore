import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async selectGuestCheckout() {
    await this.page.check('#accountFrm_accountguest');
    await this.page.click('button[title="Continue"]');
  }

  async fillGuestDetails(user) {
    await this.page.fill('#guestFrm_firstname', user.firstName);
    await this.page.fill('#guestFrm_lastname', user.lastName);
    await this.page.fill('#guestFrm_email', user.email);
    await this.page.fill('#guestFrm_telephone', user.telephone);
    await this.page.fill('#guestFrm_address_1', user.address1);
    await this.page.fill('#guestFrm_city', user.city);
    await this.page.fill('#guestFrm_postcode', user.postcode);
    await this.page.selectOption('#guestFrm_country_id', { label: user.country });
    await this.page.selectOption('#guestFrm_zone_id', { label: user.zone });
  }

  async continueCheckout() {
    await this.page.click('button[title="Continue"]');
  }

  async confirmOrder() {
    await this.page.click('#checkout_btn');
  }

  async verifyOrderSuccess() {
    await expect(this.page.locator('h1')).toHaveText(/Your Order Has Been Processed/);
  }
}
