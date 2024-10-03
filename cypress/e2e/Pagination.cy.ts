describe('pagination', () => {
  const appUrl = 'http://localhost:3000/';
  
  it('exists in page', () => {
    cy.visit(appUrl);
    
    cy.get('.pagination-bullet').should('exist');
  });

  it('arrows are shown', () => {
    cy.visit(appUrl);

    cy.get('.left-arrow').should('exist');
    cy.get('.right-arrow').should('exist');
  });

  it('arrows can be click', () => {
    cy.visit(appUrl);

    cy.get('.right-arrow').click();
    cy.get('.left-arrow').click();
  });

  it('arrows can be disable', () => {
    cy.visit(appUrl);
    
    cy.get('.left-arrow').should('be.disabled');
    
    cy.get('.right-arrow').click();
    cy.get('.right-arrow').click();
    cy.get('.right-arrow').click();
    cy.get('.right-arrow').click();

    cy.get('.left-arrow').should('not.be.disabled');
    cy.get('.right-arrow').should('be.disabled');
  });

  it("background color change", () => {
    cy.visit(appUrl);

    cy.get('.right-arrow').click();
    cy.get('.pagination-bullet').first().should('not.have.class', 'active');
    cy.get('.pagination-bullet').first().next().should('have.class', 'active');
  });

  it('should load products', () => {
    cy.visit(appUrl);

    cy.get('.home').within(() => {
      const firstProduct = cy.get('.card-title').first();

      cy.get('.right-arrow').click();
      cy.get('.card-title').first().should('not.be', firstProduct);
    });
  });
});