const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://ecommerce-playground.lambdatest.io"
  },
  defaultCommandTimeout: 5000,
  viewportWidth: 1440,
  viewportHeight: 900
});
