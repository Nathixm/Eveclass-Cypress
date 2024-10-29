describe('Cadastro Usuário', () => {
    const massa = require('../fixtures/massaCadastro') // importa a massa

    beforeEach(() => {
        cy.visit('/')
        cy.wait(1000)
        cy.visit('auth/registrar')
    });

    massa.array.forEach(({ nome, email, confirmaEmail, senha, confirmaSenha }) => {

        it(`Criar Cadastro para ${nome}`, () => {

            //verifica se o título da página
            cy.title()
                .should('eq', 'Criar Conta - Teste')

            // preenche o usuário
            cy.get('.checkout-create-user-form div:nth-child(1) label')
                .should('have.text', 'Seu nome completo  *')

            cy.get('input[type="text"][autocomplete="text"][data-vv-as="Seu nome completo"]')
                .type(nome, { delay: 100 })

            cy.get('.checkout-create-user-form div:nth-child(2) label')
                .should('have.text', 'Seu email  *')

            cy.get('input[type="text"][autocomplete="text"][data-vv-as="Seu email"]')
                .type(email, { delay: 100 })

            cy.get('.checkout-create-user-form div:nth-child(3) label')
                .should('have.text', 'Confirme seu email  *')

            cy.get('input[type="text"][autocomplete="text"][data-vv-as="Confirme seu email"]')
                .type(confirmaEmail, { delay: 100 })
            cy.wait(4000)

            cy.get('button[type="submit"]') // botão próximo
                .click()

            cy.resolveCaptcha()

            cy.get('button[type="submit"]') // botão próximo
            .click()

            cy.wait(4000)
            cy.get('.checkout-create-user-form div:nth-child(2) label')
                .should('have.text', 'Sua senha  *')

            cy.get('input[type="password"][autocomplete="text"][data-vv-as="Sua senha"]')
                .type(senha)

            cy.get('.checkout-create-user-form div:nth-child(3) label')
                .should('have.text', 'Confirme sua senha  *')

            cy.get('input[type="password"][autocomplete="text"][data-vv-as="Confirme sua senha"]')
                .type(confirmaSenha)

      //      cy.get('button[type="submit"]') // botão próximo
      //          .click()
        });
    });
});