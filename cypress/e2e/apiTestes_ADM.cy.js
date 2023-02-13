/// <reference types="cypress" />

it.only('fazer uma requisição de API', () => {

    cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
        .should((response) => {
            const { status, statusText, body } = response
            expect(status).to.eq(200)
            expect(statusText).to.eq('OK')
            expect(body).to.include('CAC TAT')
        })

})