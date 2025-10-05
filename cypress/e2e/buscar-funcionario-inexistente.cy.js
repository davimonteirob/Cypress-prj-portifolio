describe('Buscar funcionário inexistente', () => {
        beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.login('Admin','admin123');
        cy.acessingMenu(':nth-child(2) > .oxd-main-menu-item','.oxd-table-filter','/pim/viewEmployeeList');
    });

    it('na tela de busca de funcionários, pesquisa por um funcionário inexistente, deve aparecer no records found', () => {
        cy.get('input[placeholder="Type for hints..."').eq(0).type('semnome');
        cy.contains('button','Search').click();

        cy.contains('No Records Found').should('be.visible');

    });




});