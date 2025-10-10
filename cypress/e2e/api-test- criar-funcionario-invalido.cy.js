describe("Criar funcionario inválido", () => {
  it("Envia uma requisição POST /api/employees com dados inválidos,Então o status code deve ser 422", () => {
    cy.request({
      method: "POST",
      url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees",
      headers: { cookie: "orangehrm=jfkimus7bpd8knmqu70mhhtp6e" },
      failOnStatusCode: false, // ✅ Permite verificar respostas 4xx ou 5xx
      body: {
        firstName: "",
        lastName: "",
        middleName: "",
      },
    }).then((res) => {
      expect(res.status).to.be.equal(422);
    });
  });
});
