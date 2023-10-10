describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200/#/home');
    });
    it('Verificar mensagem de campos obrigatórios', () => {
        cy.login('gab', '12345678')
    })
  })