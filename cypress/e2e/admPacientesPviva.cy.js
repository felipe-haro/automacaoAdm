/// <reference types="cypress" />

const options = { env: { snapshotOnly: true } }

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

      cy.get('#login_idPesquisa')
        .type('pac@teste.com')

      cy.get('#btn_pesquisar')
        .click()

      cy.wait(6000)

      cy.get('tr:contains(Pac Teste)')
        .find('div:contains(Ativo)')
        .should('have.css', 'background-color', 'rgb(10, 138, 15)')
        .get('td:contains(pac@teste.com)')
        .should('have.text', 'pac@teste.com')

      cy.get('#id_idPesquisa')
    })

    it.only("Realiza a criação do link mágico com User PSICOLOGO, pegando o access token e passando ele como bearer e Realizando Login", () => {
      cy.getLinkMagico("pac@teste.com", "", "CONSULTORIO")
        .then((response) => {

          const url = response.body[0].url
          const authorization = response.body[0].authorization
          const linkMagico = url + authorization

          cy.log(JSON.stringify(linkMagico))

          cy.visit(linkMagico)
          cy.get('.py-4 > :nth-child(1) > .text-h4')
            .should('have.text', ' Olá Pac, ')
        })
    })
  })
})
