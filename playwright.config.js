const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    browserName: 'chromium',  // Options: chromium, firefox, webkit
    headless: false,          // Run in headless mode
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
