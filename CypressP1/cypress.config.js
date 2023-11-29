const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout:10000,
  env:{
    url: "https://rahulshettyacademy.com/angularpractice"
  },
  projectId: "m5gwy9",
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
});
