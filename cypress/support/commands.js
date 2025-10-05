Cypress.Commands.add('login', (username, password) => { 
        cy.get('[name="username"]').type(username);
        cy.get('[name="password"]').type(password);
        cy.get('.oxd-button').click();


     });
Cypress.Commands.add('acessingMenu', (buttonMenu,elementTablePage, urlPage) => {
        cy.get(buttonMenu).click();
        cy.get(elementTablePage).should('be.visible');
        cy.url().should('include', urlPage);
        //cy.contains(titlePage).should('be.visible')
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })