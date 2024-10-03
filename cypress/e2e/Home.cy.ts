describe("home page", () => {
  beforeEach(() => {
    const appUrl = "http://localhost:3000/";
    cy.visit(appUrl);
  });

  it("show loading icon", () => {
    cy.get('[data-testid="loading"]').should("not.exist");
  });

  it("should render search", () => {
    cy.get('[data-testid="searchbar"]').should("exist");
  });

  it("should render sort", () => {
    cy.get("#sort").should("exist");
  });

  it("should render product cards", () => {
    cy.get(".home").within(() => {
      cy.get(".card-container").should("exist");
    });
  });

  it("should render pagination", () => {
    cy.get(".pagination").should("exist");
  });
});
