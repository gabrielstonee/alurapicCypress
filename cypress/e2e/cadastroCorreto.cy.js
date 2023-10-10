describe('Página de cadastro', () => {
  it('preencher os campos do formulário para cadastro de usuário', () => {
    cy.visit('http://localhost:4200/#/home');
    cy.contains('a','Register now').click();
    cy.get('[data-test="email"]').type('gabriel@email.com.br')
    cy.get('[data-test="fullName"]').type('gabriel')
    cy.get('[data-test="registerUserName"]').type('gab')
    cy.get('[data-test="registerPassword"]').type('12345678')
    cy.contains('button','Register').click();
  })
})