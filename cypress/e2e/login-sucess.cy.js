describe('Cenário: Login com credenciais válidas',() =>{

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });

    it('Usuário válido e senha válida, então, deve ir/pagina inicial', () => {
        cy.login('Admin','admin123');
    });

});