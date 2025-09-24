describe('Cenário: Login com senha inválida',() =>{

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });

    it('Usuário válido e senha inválida deve aparecer: Invalid credentials', () => {
        cy.login('Admin','admin123ddd');
        cy.contains('Invalid credentials').should('be.visible');        
    });

    it('Quando não preencho os campos então devo ver a mensagem de erro: Required', () => {
        cy.login(' ',' ');
        cy.contains('Required').should('be.visible');        
    });

});