import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: process.env.E2E_BASE_URL || 'http://127.0.0.1:4174',
    browserName: 'chromium',
    ...(process.env.CHROME_BIN ? { launchOptions: { executablePath: process.env.CHROME_BIN } } : {}),
  },
  webServer: {
    command: process.env.E2E_SERVER_COMMAND || 'npm run preview -- --port 4174',
    url: process.env.E2E_BASE_URL || 'http://127.0.0.1:4174',
    reuseExistingServer: !process.env.CI,
  },
});
