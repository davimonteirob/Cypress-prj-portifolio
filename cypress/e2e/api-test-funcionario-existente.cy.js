describe("Api OrangeORHM - Capturar resosta da Api sobre funcionário existente", () => {
  //iremos fazer uma requisição para API sobre funcionários existente funcionário.
  //antes de testar verifique se o usuario existe e confira a chave de autorização.
  it("Envia uma requisição GET /api/employees/1, O status code deve ser 200 E o body deve conter employeeId = 1 ", () => {
    cy.request({
      method: "GET",
      url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&nameOrId=Amelia+Brown&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC",
      headers: { cookie: "orangehrm=upe8gqmg802bhho32do7u842um" },
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).to.not.be.empty;
      // ✅ valida que existe um array "data"
      expect(res.body).to.have.property("data");

      // ✅ valida o employeeId dentro do primeiro item da lista
      expect(res.body.data[0]).to.have.property("employeeId", "01715");
    });

    //digitar sim no chat gpt para ver como criar o teste correto dentro da API.
  });
  it("Exibe o corpo da resposta para inspeção", () => {
    cy.request({
      method: "GET",
      url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&nameOrId=Amelia+Brown&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC",
      headers: {
        cookie: "orangehrm=upe8gqmg802bhho32do7u842um", // substitua pelo cookie válido
      },
    }).then((res) => {
      // Exibe o corpo inteiro no console do Cypress
      cy.log(JSON.stringify(res.body));

      // Também podemos imprimir no console do navegador
      console.log("Resposta da API:", res.body);
    });
  });
});
