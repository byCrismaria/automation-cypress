const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  projectId: "1ozdz2",
  defaultCommandTimeout: 5000,  
  e2e: {
    baseUrl: 'https://automationexercise.com',
    setupNodeEvents(on, config) {     
      allureCypress(on, {
        resultsDir: "./allure-results"
      }); 
      return config;
    },
  },
});
