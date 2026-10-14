import { expect, test } from '@playwright/test';

test('dashboard loads bounties, opens details, and adds a row', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  if (!process.env.E2E_LIVE_API) await page.route('**/api/bounties', route => route.fulfill({
    json: [
      { id: 1, title: 'Authentication Module', amount: 2500, description: 'A module that handles user authentication and security.' },
      { id: 2, title: 'Data Visualization Tool', amount: 4000, description: 'A tool for visualizing complex datasets in a user-friendly manner.' },
      { id: 3, title: 'Payment Gateway Integration', amount: 6000, description: 'Integrating a secure and efficient payment gateway for transactions.' },
      { id: 4, title: 'API Rate Limiter', amount: 3500, description: 'A component to limit the number of API requests from a single user to prevent abuse.' },
      { id: 5, title: 'Mobile Responsiveness Optimizer', amount: 5000, description: 'Enhancing the mobile user experience by optimizing responsiveness across devices.' },
    ],
  }));

  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Bounty Dashboard' })).toBeVisible();
  await expect(page.getByRole('row')).toHaveCount(6);
  await page.getByRole('row', { name: /Authentication Module/ }).click();
  await expect(page.getByRole('dialog', { name: 'Bounty Details' })).toContainText('A module that handles user authentication and security.');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'Add New Bounty' }).click();
  await expect(page.getByRole('row')).toHaveCount(7);
  expect(errors).toEqual([]);
});
