describe(" Simular resposta de erro: API de busca de funcionário está indisponível", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.login("Admin", "admin123");
    cy.acessingMenu(
      ":nth-child(2) > .oxd-main-menu-item",
      ".oxd-table-filter",
      "/pim/viewEmployeeList"
    );

    cy.intercept(
      "GET",
      "**/api/v2/pim/employees**",//Os ** atuam como wildcard, aceitando qualquer URL que contenha esse trecho. Assim, todas as requisições de busca de funcionários vão retornar erro 500.
      {
        statusCode: 500,
      }
    ).as("stubGet");
  });

  it("Quando simulo a resposta de erro 500 no Cypress, Então, a mensagem de 'No Record Found' deve aparecer", () => {
    cy.get('input[placeholder="Type for hints..."]').eq(0).type("Amelia");
    cy.contains("button", "Search").click(); //irá disparar a API (requisição para leitura de dados..irá ler dados CRUD)
    cy.wait("@stubGet");
    cy.contains('No Records Found').should('be.visible');
  });
});

//descubra qual url certa, pq não ta interceptando a requisição
