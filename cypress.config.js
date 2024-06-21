const { defineConfig } = require("cypress");
module.exports = defineConfig({
  projectId: "1ozdz2",
  defaultCommandTimeout: 5000,  
  e2e: {
    baseUrl: 'https://automationexercise.com',
    setupNodeEvents(on, config) {      
      defaultCommandTimeout: 10000
    },
  },
});
