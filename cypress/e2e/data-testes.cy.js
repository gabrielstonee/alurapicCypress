describe('Página de cadastro', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/');
    })


        const usuarios = require('../fixtures/usuarios.json');
        usuarios.forEach(usuario => {
            it('preencher os campos do formulário para cadastro de usuário', () => {
                cy.get('[data-test="register"]').click();
                cy.get('[data-test="email"]').type(usuario.email)
                cy.get('[data-test="fullName"]').type(usuario.fullName)
                cy.get('[data-test="registerUserName"]').type(usuario.userName)
                cy.get('[data-test="registerPassword"]').type(usuario.password)
                cy.contains('button','Register').click();
            })
        })
    
  })