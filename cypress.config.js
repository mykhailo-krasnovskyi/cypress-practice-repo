const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space/',
    // retries: {
    //   runMode: 2,
    //   openMode: 3
    // },
    reporter: 'cypress-mochawesome-reporter',

    // viewportHeight: 1080,
    // viewportWidth: 1920,
    video: true,
    chromeWebSecurity: false,
    screenshotOnRunFailure: true,
    env: {
      MAIN_USER_EMAIL: "michael.krasnovskyi+testUser1@gmail.com",
      MAIN_USER_PASSWORD: "ZSgeVQhuU3qkvlG",
    }
  },

});
