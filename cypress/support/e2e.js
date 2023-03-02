/// <reference types="cypress" />

import './commands'
import 'cypress-plugin-api'
import './api_commands'

require('@shelex/cypress-allure-plugin');
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
  })
// Alternatively you can use CommonJS syntax:
// require('./commands')
require('@cypress/xpath');
