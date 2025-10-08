describe("Logout bem-sucedido", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.login("Admin", "admin123");
  });

  it("Logado no sistema, clickar botão de logout, devo ser redirecionado para a tela de login", () => {
    cy.get(".oxd-userdropdown-tab").click();
    cy.contains(".oxd-userdropdown-link", "Logout")
      .should("be.visible")
      .click();
    cy.contains("button", "Login").should("be.visible");
  });
});
