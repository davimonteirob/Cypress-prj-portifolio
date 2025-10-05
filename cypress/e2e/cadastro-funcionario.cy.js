describe('Cadastrar funcionário (employee)',() => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.login('Admin','admin123');
        cy.acessingMenu(':nth-child(2) > .oxd-main-menu-item','.oxd-table-filter','/pim/viewEmployeeList');
    });

    it('Cadastrar funcionário válido, inserir dados válidos e salvar, então, funcionário deve aparecer na lista de funcionários', () => {

        // -- PIM > Preenche campos para adicionar usuario novo com sucesso e captura id do novo usuario --

        cy.get('.orangehrm-header-container > .oxd-button').click();
        cy.get('[name="firstName"]').type('M');
        cy.get('[name="middleName"]').type('M');
        cy.get('[name="lastName"]').type('Jr');
        cy.get('.oxd-button--secondary').click();
        cy.contains('Successfully Saved').should('be.visible');

        cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input')//id gerado
        .should(($input) => {
            expect($input.val()).to.not.be.empty;
        }) // espera que tenha algum valor
        .invoke('val') //pega valor do input (id usuario)
        .then((idGerado) => {
            cy.log('ID capturado: ' + idGerado);
            cy.wrap(idGerado).as('userId'); //salva como alias para usar depois
            cy.contains('Personal Details').should('be.visible');// valida que a seção "Personal Details" está visível depois de capturar ID
        });
        

        // -- acessa menu PIM > Digita nome do funcionario e pesquisa pelo mesmo, validando id --

        cy.acessingMenu(':nth-child(2) > .oxd-main-menu-item','.oxd-table-filter','/pim/viewEmployeeList');
        cy.get('input[placeholder="Type for hints..."').eq(0).type('M M Jr'); 
        cy.contains('button','Search').click();

        cy.get('@userId').then((idGerado) => {
            cy.contains(idGerado).should('be.visible');
        });
    });
    
});