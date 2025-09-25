describe('Navegação no Menu', () => {

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.login('Admin','admin123');
    });

    it('Acessar o menu PIM, clicar no menu PIM, deve-se visualizar a tela de gerenciamento de funcionários',() => {
        cy.acessingMenu(':nth-child(2) > .oxd-main-menu-item','.oxd-table-filter','/pim/viewEmployeeList','Employee Information');
    });

    it('Acessar o menu Admin. Clickar no menu Admin, deve-se visualizar a tela de administração de usuários', () => {
        cy.acessingMenu(':nth-child(1) > .oxd-main-menu-item','.oxd-table-filter','/admin/viewSystemUsers', 'System Users');
    });

});