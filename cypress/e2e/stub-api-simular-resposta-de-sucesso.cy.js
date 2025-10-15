describe("Simular resposta de sucesso", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.login("Admin", "admin123");
    cy.acessingMenu(
      ":nth-child(2) > .oxd-main-menu-item",
      ".oxd-table-filter",
      "/pim/viewEmployeeList",
      "Employee Information"
    );
    cy.intercept(
      "POST",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees",
      {
        statusCode: 200,
        body: {
          data: {
            firstName: "Calabreso",
            lastName: "Salaminho",
          },
        },
      }
    ).as("stubPost");
  });

  it("Quando simulo a resposta de sucesso,o sistema deve exibir os dados simulados corretamente", () => {
    cy.contains("button", "Add").click();
    cy.get('input[placeholder="First Name"]').type("Cacau");
    cy.get('input[placeholder="Last Name"]').type("Fakeke");
    cy.contains("button", "Save").click(); // Ação que dispara o POST
    cy.wait("@stubPost").then((interception) =>{
          // Confirma que o body fake foi usado
    expect(interception.response.body.data.firstName).to.equal("Calabreso");
    expect(interception.response.body.data.lastName).to.equal("Salaminho");

    }) // Espera pela requisição interceptada



  });
});

//resolver porquê a requisição não está sendo interceptada
