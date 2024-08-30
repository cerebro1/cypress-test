const { test, expect } = require('@playwright/test');

test('HelloKube App', async ({ page }) => {
  await page.goto('http://192.168.103.2:30865/');

  const defaultContent = await page.locator('body');
  await expect(defaultContent).toContainText('Hello, Kubernetes!');
});
