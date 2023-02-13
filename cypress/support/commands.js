/// <reference types="cypress" />

Cypress.Commands.add('realizarLogin', (usuario, senha) => {

    cy.get('#campo_login')
    .type(usuario)

    cy.get('#campo_senha')
    .type(senha)

    cy.get('#btn_entrar')
    .click()
})
