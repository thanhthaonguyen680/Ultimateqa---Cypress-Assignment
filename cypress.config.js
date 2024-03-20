const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "jmgkaa",
  reporter: 'cypress-mochawesome-reporter',
  experimentalSessionAndOrigin: true,
  chromeWebSecurity: false,
  followRedirect: true,
  reporterOptions: {
  reportDir: "cypress/reports/mochawesome-report",
    overwrite: true,
    html: true,
    json: false,
    embeddedScreenshots: true,
    reportPageTitle: "My test Suite Result"

  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      // implement node event listeners here
    },
    baseUrl: "https://ultimateqa.com/automation/"
  },
  //reponsive same with laptop device
  viewportWidth: 1366,
  viewportHeight: 768
});