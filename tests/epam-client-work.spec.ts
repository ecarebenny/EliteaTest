import { test, expect } from '@playwright/test';

test.describe('EPAM website - Client Work navigation', () => {
  test('navigate via Services to Client Work', async ({ page }) => {
    // 1. Go to EPAM homepage
    await page.goto('https://www.epam.com/');

    // 2. Open the header 'Services' menu
    const servicesMenu = page.getByRole('link', { name: /Services/i });
    await servicesMenu.click();

    // 3. Click 'Explore Our Client Work' link
    const exploreClientWork = page.getByRole('link', { name: /Explore our client work/i });
    await exploreClientWork.click();

    // 4. Verify 'Client Work' text is visible on the page
    await expect(page.getByText(/Client Work/i)).toBeVisible();
  });
});
