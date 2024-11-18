const { test, expect } = require('@playwright/test');

// Comprueba el Learn
test('Learn More', async ({ page }) => {
  await page.goto('https://www.werfen.com/es/es');
  
  //Accptar las cookies
  const acceptCookiesButton = await page.locator('button:has-text("Aceptar")');
  if (await acceptCookiesButton.isVisible()) {
  await acceptCookiesButton.click();
  }
  
  await page.getByRole('link', { name: 'APRENDE MÁS' }).click();
  await expect(page).toHaveURL('https://www.werfen.com/es/es/our-purpose-vision-and-values');
  await expect(page).toHaveTitle(/Our Purpose | Werfen en España/);
});
