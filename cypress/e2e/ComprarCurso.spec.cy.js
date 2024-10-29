import { NOME_COOKIE_1, NOME_COOKIE_2, VALOR_COOKIE_1, VALOR_COOKIE_2 } from "../support/commands"

describe('Testando Eveclass', () => {

  function loginNoSite() {
    cy.visit('/auth/entrar')

    cy.get('div[class="auth-header"] h1')
      .should('have.text', 'Entrar')

    cy.get('input[type="email"]')
      .type('', { delay: 100 }) //digite o email

    cy.get('input[type="password"]')
      .type('', { delay: 100 }) //digite a senha

    cy.get('button[type="submit"]')
      .click()

    cy.resolveCaptcha()

    cy.get('button[type="submit"]')
      .click()
    cy.wait(2000)  
  };

  function loginComCookie() {
    cy.setCookie(NOME_COOKIE_1, VALOR_COOKIE_1)
    cy.setCookie(NOME_COOKIE_2, VALOR_COOKIE_2)
  };

  beforeEach(() => {
    cy.visit('/')
    loginNoSite()
    //loginComCookie()
  });

  it('Fluxo Compra de Curso', () => {
    cy.visit('/cursos')

    cy.get('.course-list-nav')
      .should('contain.text', 'Todos cursos')

    cy.get('.content-list-main a:nth-child(9)')
      .click()

    cy.get('.content-header h1')
      .should('contain.text', 'Como se organizar no ambiente de Estudos')

    cy.get('.content-buy .content-action a:first')
      .click()
    cy.wait(2000)

    cy.get(".breadcrumb-item.active")
      .should('contain.text', '2. Pagamento')

    cy.get('input[type="text"][data-vv-as="CPF"]')
      .clear()
      .type('63891227051', { delay: 100 } )

    cy.get('input[type="text"][data-vv-as="Telefone"]')
      .clear()
      .type('3133338854', { delay: 100 } )

    cy.get('input[placeholder="CEP"]')
      .clear()
      .type('35620975', { delay: 100 } )

    cy.get('input[placeholder="Cidade"]')
      .clear()
      .type('Abaeté', { delay: 100 } )

    cy.get('input[placeholder="Estado"]')
      .clear()
      .type('MG', { delay: 100 } )

    cy.get('input[placeholder="Bairro"]')
      .clear()
      .type('Centro', { delay: 100 } )

    cy.get('input[placeholder="Rua"]')
      .clear()
      .type('Rua Principal', { delay: 100 } )

    cy.get('input[placeholder="Número"]')
      .clear()
      .type('01', { delay: 100 } )
      cy.wait(500)  

    cy.get('span[class="button-text"] span span')
      .click()
    cy.wait(500)

    cy.resolveCaptcha()

    cy.get('span[class="button-text"] span span')
    .click()
    cy.wait(500)

    cy.get('div[class="title"] h1')
      .should('contain.text', 'Compra realizada com sucesso!')
  });

});