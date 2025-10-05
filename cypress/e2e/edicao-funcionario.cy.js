describe('Editar funcionário existente',() => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.login('Admin','admin123');
        cy.acessingMenu(':nth-child(2) > .oxd-main-menu-item','.oxd-table-filter','/pim/viewEmployeeList');
    });

    it('Editar funcionário, alterar dados e salvar', () => {
        cy.get('input[placeholder="Type for hints..."').eq(0).type('M M Jr');
        cy.contains('button','Search').click();

        cy.contains('.oxd-table-row', 'M M').find('button i.bi-pencil-fill').click();

        cy.get('input[name="lastName"]').clear().type('Jrr');
        cy.get('.oxd-select-text-input').eq(0).click().type('B');
        cy.contains('div[role="option"]', 'Brazil').click();
        cy.get('.oxd-select-text-input').eq(1).click().type('B');
        cy.contains('div[role="option"]', 'Single').click();
        cy.get('input[placeholder="yyyy-dd-mm"]').eq(1).click();
        cy.get('li.oxd-calendar-selector-month').click();
        cy.get('li.oxd-calendar-dropdown--option').contains('September').click();
        cy.get('li.oxd-calendar-selector-year i.oxd-icon-button__icon').click();
        cy.get('li.oxd-calendar-dropdown--option').contains('1999').click();
        cy.get('.oxd-calendar-dates-grid').contains('21').click();


        cy.get('.oxd-layout-context').click();
        cy.contains('label', 'Male').click();
        cy.contains('button','Save').eq(0).click();

        cy.get('.oxd-toast-content-text')
        .contains('Successfully Updated')
        .should('be.visible');       
                     
    });
    
    it(' Verifica se alterações do funcionario estão refletidas na lista de funcionários',() => {

        cy.get('input[placeholder="Type for hints..."').eq(0).type('M M Jr');
        cy.contains('button','Search').click();
        cy.get('.oxd-table-row').contains('M M').should('be.visible');

        cy.get('.oxd-table-body .oxd-icon.bi-pencil-fill').click();
        cy.get('input[name="lastName"]').should('have.value', 'Jrr');

        

     });


});