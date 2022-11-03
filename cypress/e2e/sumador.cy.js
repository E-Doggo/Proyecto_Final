describe("Sumador", () => {
  it("Registrar una tarea", () => {
    cy.visit("/");
    cy.get("#materia").type("Ing. Software");
    cy.get("#tarea").type("Proyecto final");
    cy.get("#registrar").click();
    cy.get("#resultado-div").should("contain", "Ing. Software: Proyecto final Anotado!");
  });
});
