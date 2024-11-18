const { test, expect } = require('@playwright/test');

//Comprobar el About
test('About Test', async ({ page }) => {
  await page.goto('https://www.werfen.com/es/es');

  //Accptar las cookies
  const acceptCookiesButton = await page.locator('button:has-text("Aceptar")');
  if (await acceptCookiesButton.isVisible()) {
  await acceptCookiesButton.click();
  }
  
  await page.getByRole('link', { name: 'ACERCA DE WERFEN' }).click();
  await expect(page).toHaveURL('https://www.werfen.com/es/es/about-werfen');
  await expect(page).toHaveTitle(/About Werfen | Werfen en España/)
});
