const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space/',
    retries: {
      runMode: 2,
      openMode: 3
    },
    // viewportHeight: 1080,
    // viewportWidth: 1920,
    video: true,
    chromeWebSecurity: false,
    screenshotOnRunFailure: true
  },

});
