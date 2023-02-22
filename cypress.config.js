const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9kxn2k',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
