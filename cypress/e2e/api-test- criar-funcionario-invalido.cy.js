describe("Criar funcionario inválido", () => {
  it("Envia uma requisição POST /api/employees com dados inválidos,Então o status code deve ser 422", () => {
    const payload = 
    const payload = 

    cy.request(}).then((res) => {
      expect(res.status).to.be.equal(422);
    });
  });
});
