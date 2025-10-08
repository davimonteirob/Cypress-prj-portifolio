describe("Criar funcionário válido", () => {
  it("Envia requisição POST /api/employees com dados válidos, o status code deve ser 200  resposta deve conter os dados do funcionário criado", () => {
    cy.request({
      method: "POST",
      url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees",
      headers: { cookie: "orangehrm=6gbcdibha5skbmnrl2va1edstb" },
      body: {
        firstName: "Vlade",
        lastName: "Conde",
        middleName: "",
      },
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).to.not.be.empty;
      expect(res.body.data).to.have.property("firstName", "Vlade");
      expect(res.body.data).to.have.property("lastName", "Conde");
    });
  });
});
