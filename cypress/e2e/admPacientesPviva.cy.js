/// <reference types="cypress" />

describe('Suite Módulo Pacientes', () => {

  const usuario = 'felipecaue@psicologiaviva.com.br';
  const senha = '12345678@';

  context('Módulo Pacientes', () => {

      beforeEach(() => {
      cy.visit('/')
    })

    it('realizar busca de um Paciente e Validando email, se ele esta ativo e se a cor do ativo esta correta', () => {

      cy.realizarLogin(usuario, senha)
      
      cy.get("#menu_pacientes")
        .click()
        .get("#submenu_pacientes")
        .click()
      
      cy.get('#nome_idPesquisa')

      cy.get('#nome_idPesquisa')
        .type('Paciente Teste')
      
      cy.get('#btn_pesquisar')
        .click()

      cy.wait(6000)

      cy.get('tr:contains(Paciente Teste)')
        .find('div:contains(Ativo)')
        .should('have.css', 'background-color', 'rgb(10, 138, 15)')
        .get('td:contains(pac@teste.com)')
        .should('have.text', 'pac@teste.com')

        cy.get('#id_idPesquisa')
    })
  })
})
