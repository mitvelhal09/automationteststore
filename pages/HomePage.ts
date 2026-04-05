import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://automationteststore.com/');
  }
  private get searchInput() {
    return this.page.getByRole('textbox', { name: 'Search Keywords' });
  }

  private get searchIcon() {
    return this.page.locator('.fa.fa-search').first();
  }
  async searchProduct(productName: string) {
    await this.searchInput.fill(productName);

    await Promise.all([
      this.page.waitForNavigation(),
      this.searchIcon.click()
    ]);
  }

  async getSearchResultsCount() {
    return await this.page.locator('#maincontainer .productname').count();
  }

  async selectFirstProduct() {
    await this.page.locator('.prdocutname').first().click();
  }
}
