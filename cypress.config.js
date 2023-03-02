const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://hml-adm.psicologiaviva.com.br/login',
    apiUrl: 'https://hml-kong-api.psicologiaviva.com.br',
    "experimentalSessionAndOrigin": true,
    "chromeWebSecurity": false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
      // implement node event listeners here
    },
  },
});
