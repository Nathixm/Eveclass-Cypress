import { NOME_COOKIE_1, NOME_COOKIE_2, VALOR_COOKIE_1, VALOR_COOKIE_2 } from "../support/commands"

describe('Testando Eveclass', () => {

  function loginNoSite() {
    cy.visit('/auth/entrar')

    cy.get('div[class="auth-header"] h1')
      .should('have.text', 'Entrar')

    cy.get('input[type="email"]') //digite o email
      .type('', { delay: 100 })

    cy.get('input[type="password"]') //digite a senha
      .type('', { delay: 100 })

    cy.get('button[type="submit"]')
      .click()

    cy.resolveCaptcha()

    cy.get('button[type="submit"]')
      .click()

    cy.wait(3000)
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

  it('Criar Curso', () => {
    cy.visit('/admin/conteudo')
    cy.wait(1000)

    cy.get('div:nth-child(4) a:nth-child(2)') // clica na página curso
      .click()

    cy.get('a[type="button"]') // botão +novo curso
      .click()

    cy.get('.current')
      .should('contain.text', '1. Estrutura')

    cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(2)')
      .should('contain.text', 'Módulo')

    cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > button:nth-child(2)')
      .click()

    cy.get('button[type="submit"]') //botão Prosseguir
      .click()

    cy.get('.current')
      .should('contain.text', '2. Cronograma')

    cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(2)')
      .should('contain.text', 'Cronograma flexível')

    cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > button:nth-child(2)')
      .click()

    cy.get('button[type="submit"] span[class="button-text"] span span') // botão prosseguir
      .click()

    cy.get('.current')
      .should('contain.text', '3. Cadastro')
    cy.wait(1000)

    cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) label')
      .should('contain.text', 'Nome')

    cy.get('input[placeholder="Insira o nome"]')
      .type('Testes com Cypress')

    cy.get('form[data-vv-scope="courseForm"] div div div div div div div header')
      .should('contain.text', 'Resumo')

    cy.get('textarea[placeholder="Resumo explanatório do curso"]')
      .type('Cypress é uma ferramenta de teste end-to-end (E2E) moderna e popular para aplicações web.')

    cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) label')
      .should('contain.text', 'Autores ')

    cy.get('#vs1__combobox').click({ force: true })

    cy.get('.vs__dropdown-menu').should('be.visible'); // Garante que a lista de opções está visível

    cy.get('#vs1__option-0 > div').click({ force: true }) // Tenta clicar na opção diretamente  

    cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) label')
      .should('contain.text', 'Tags ')

    cy.get('label:contains("Vídeo de apresentação")')
      .should('contain.text', 'Vídeo de apresentação')

    cy.get('input[placeholder="https://www.youtube.com/watch?v=code"]')
      .type('https://www.youtube.com/watch?v=-YEKnKzHnhk', { force: true })

    cy.get('div[class="label-wrapper"] div[class="label"]')
      .should('contain.text', 'Descrição do curso')

    cy.get('.form-blocks p')
      .as('descricao')
      .click({ force: true })

    cy.get('@descricao')
      .type('T', { force: true })
    cy.get('@descricao')
      .type('e', { force: true })
    cy.get('@descricao')
      .type('s', { force: true })
    cy.get('@descricao')
      .type('t', { force: true })
    cy.get('@descricao')
      .type('e', { force: true })

    cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) label')
      .should('contain.text', 'Hablilitar certificado  *')

    cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1)')
      .click()

    cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) label')
      .should('have.text', 'Exibir carga horária personalizada  *')

    cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1)')
      .click()

    cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) label')
      .should('have.text', 'Nome do instrutor no certificado ')

    cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)')
      .type('Arnaldo Rodrigues')

    cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) label')
      .should('contain.text', 'Carga horária personalizada  *')

    cy.get('input[type="number"]')
      .type('8')

    cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) label')
      .should('have.text', 'Liberação Linear  *')

    cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(2) > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1)')
      .click()

    cy.get('button[type="submit"] span[class="button-text"] span span') //Botão salvar
      .click()

    cy.get('.list-header-title')
      .should('contain.text', 'Cursos')
  });

});