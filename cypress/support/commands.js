// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('resolveCaptcha', () => {
    cy.pause();
    cy.log('Resolva o captcha manualmente')
  
  });

const NOME_COOKIE_1 = ''
const VALOR_COOKIE_1 = ''
const NOME_COOKIE_2 = ''
const VALOR_COOKIE_2 = ''

export { VALOR_COOKIE_1, NOME_COOKIE_1, NOME_COOKIE_2, VALOR_COOKIE_2 }