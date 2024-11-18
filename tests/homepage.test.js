const { test, expect } = require('@playwright/test');

//Test para comprobar la home

test('Homepage', async ({ page }) => {
  await page.goto('https://www.werfen.com/es/es');
  
  // Comprueba que el nav esté disponible

  await page.waitForSelector('nav');
  const nav = await page.$('nav');
  await expect(nav).not.toBeNull();

  // Comprueba que el logo esté disponible
  await page.waitForSelector('img[alt="Logo"]');
  const logo = await page.$('img[alt="Logo"]');
  await expect(logo).not.toBeNull();
});
