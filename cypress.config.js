const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({

  pageLoadTimeout: 120000,
  viewportHeight: 500,
  viewportWidth: 1200,
  defaultCommandTimeout: 8000,

  reporters: [['allure', {
    outputDir: './reports/allure-results/',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: false,
}]],
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // require("cypress-mochawesome-reporter/plugin")(on)
      allureWriter(on, config);
      return config;
    
  
    },
  },


});