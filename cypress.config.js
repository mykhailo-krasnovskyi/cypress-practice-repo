const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    retries: {
      runMode: 2,
      openMode: 3
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: true,
    chromeWebSecurity: false,
    screenshotOnRunFailure: true
  },

});
