const elements = require('./elements').ELEMENTS;

class Cadastro {
    acessarPaginaDeCadastro(){
        cy.visit('http://localhost:4200/#/home');
        cy.get('[data-test="register"]').click();
    }
    preencherFormulario(){
        cy.get('[data-test="register"]').click();
        cy.get('[data-test="email"]').type('gabriel@email.com.br')
        cy.get('[data-test="fullName"]').type('gabriel')
        cy.get('[data-test="registerUserName"]').type('gab')
        cy.get('[data-test="registerPassword"]').type('12345678')
    }
    submeterCadastro(){
        cy.contains('button','Register').click();
    }
}

export default new Cadastro();