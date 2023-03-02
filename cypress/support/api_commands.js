let accessToken

Cypress.Commands.add('getAccessToken', () => {
  cy.request({

    method: 'POST',
    url: Cypress.config('apiUrl') + '/auth/v1/oauth2/token/user',

    body: {
      client_id: `${Cypress.env('client_id')}`,
      client_secret: `${Cypress.env('client_secret')}`,
      scope: "Integration",
      grant_type: "client_credentials"
    },
  }).then((response) => {
    expect(response.status).to.eq(200)
    return response.body.access_token
  })
})

Cypress.Commands.add('getLinkMagico', (user, convenio, type) => {

  const bodyValueLinkMagico = {
    user: user,
    convenio: convenio,
    type: type
    }

  cy.getAccessToken().then((token) => {
    cy.request({
      method: "POST",
      url: Cypress.config('apiUrl') + '/auth/v1/oauth2/token/link',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: bodyValueLinkMagico,
    })
  })
})