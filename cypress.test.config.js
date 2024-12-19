const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://guest:welcome2qauto@qauto2.forstudy.space/',
        // retries: {
        //     runMode: 2,
        //     openMode: 3
        // },
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
