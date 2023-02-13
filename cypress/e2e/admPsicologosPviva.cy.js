/// <reference types="cypress" />

describe('Suite Módulo Psicólogos', () => {

  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad(win) {
        cy.stub(win, "open").as("novaAba")

      }
    })

  })


  context('Valida Psicólogos Ativos na Plataforma pelo ADM Consultório', () => {

    const usuario = 'felipecaue@psicologiaviva.com.br';
    const senha = '12345678@';

    it('realizar busca de um profissional e Validando email, se ele esta ativo e se a cor do ativo esta correta', () => {

      cy.realizarLogin(usuario, senha)

      cy.contains("Profissionais")
        .click()

      cy.get('#nome_idPesquisa')
        .type('Elise Tes')

      cy.get('#btn_pesquisar')
        .click()

      cy.get('tr:contains(Elise Teste)')
        .find('div:contains(Ativo)')
        .should('have.css', 'background-color', 'rgb(10, 138, 15)')
        .get('td:contains(seuemail@cicloceap.com.br)')
        .should('have.text', 'seuemail@cicloceap.com.br')
    })
  })

  context('Realiza Acesso Master com Psicólogo ativo encontrado no ADM Consultório', () => {

    const usuario = 'felipecaue@psicologiaviva.com.br';
    const senha = '12345678@';

    it('realizar busca de profissional e fazer um acesso master no perfil', () => {

      cy.realizarLogin(usuario, senha)

      cy.contains("Profissionais")
        .click()

      cy.get('#nome_idPesquisa')
        .type('Elise Tes')

      cy.get('#btn_pesquisar')
        .click()

      cy.get("#btn_acoes").click()
        .get('#bntAcessoMasterProf').as("acessoMasterNewTab")

      cy.get("@acessoMasterNewTab").click()

      cy.origin('@novaAba', () => {

      })


    })
  })

})