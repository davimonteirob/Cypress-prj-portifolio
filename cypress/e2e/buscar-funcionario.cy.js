describe('Buscar funcionário existente', () => {
        beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.login('Admin','admin123');
        cy.acessingMenu(':nth-child(2) > .oxd-main-menu-item','.oxd-table-filter','/pim/viewEmployeeList');
    });

    it('na tela de busca de funcionários, pesquisa por um funcionário existente', () => {
        cy.get('input[placeholder="Type for hints..."').eq(0).type('M M Jr');
        cy.contains('button','Search').click();

        cy.get('.oxd-table-row').contains('M M').eq(0).should('be.visible');

        cy.get('.oxd-table-body .oxd-icon.bi-pencil-fill').click();
        cy.contains('Personal Details').should('be.visible');

    });


});