describe("Buscar funcionário inexistente", () => {
  it("Envia uma requisição GET /api/employees/9999, o retorno deve ser vazio no array data", () => {
    cy.request({
      method: "GET",
      url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&employeeId=9999&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC",
      headers: { cookie: "orangehrm=mpi994hlknujv3hqf0br2ghoo2" },
    }).then((res) => {
      cy.log(JSON.stringify(res.body));
      expect(res.status).to.be.equal(200);
      expect(res.body.data).to.be.an("array").that.is.empty;
    });
  });
});
