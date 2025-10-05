const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 60000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
