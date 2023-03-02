/// <reference types="cypress" />

const options = { env: { snapshotOnly: true } }

describe('Suite Módulo Psicólogos', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  context('Valida Psicólogos Ativos na Plataforma pelo ADM Consultório', () => {

    const usuario = 'felipecaue@psicologiaviva.com.br';
    const senha = '12345678@';

    it('realizar busca de um profissional e Validando email, se ele esta ativo e se a cor do ativo esta correta', () => {

      cy.realizarLogin(usuario, senha)

      cy.contains("Profissionais")
        .click()

      cy.get('#nome_idPesquisa')
        .type('Elise Psicologa Teste')

      cy.get('#btn_pesquisar')
        .click()

      cy.get('tr:contains(Elise Psicologa Teste)')
        .find('div:contains(Ativo)')
        .should('have.css', 'background-color', 'rgb(10, 138, 15)')
        .get('td:contains(seuemail@cicloceap.com.br)')
        .should('have.text', 'seuemail@cicloceap.com.br')
    })

    it("Realiza a criação do link mágico com User PSICOLOGO, pegando o access token e passando ele como bearer e Realizando Login", () => {
      cy.getLinkMagico("seuemail@cicloceap.com.br", "", "CONSULTORIO")
        .then((response) => {

          const url = response.body[0].url
          const authorization = response.body[0].authorization
          const linkMagico = url + authorization

          cy.log(JSON.stringify(linkMagico))

          cy.visit(linkMagico)
          cy.get(':nth-child(4) > .text-h4')
            .should('have.text', ' Olá Elise, ')
        })
    })
  })
})