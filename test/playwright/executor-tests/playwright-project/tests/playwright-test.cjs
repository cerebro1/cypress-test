const { test, expect } = require('@playwright/test');

test('HelloKube App', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const headerText = await page.innerText('header h1');
  const mainContent = await page.innerText('section p');

  expect(headerText).toBe('HelloKube App');
  expect(mainContent).toBe('Welcome to the HelloKube App. This is the main content section.');
});
