describe('home page', () => {
  const appUrl = 'http://localhost:3000/';

  it('show loading icon', () => {
    cy.visit(appUrl);
    
    cy.get('[data-testid="loading"]').should('not.exist');
  });
  
  it('should render search', () => {
    cy.visit(appUrl);
    
    cy.get('[data-testid="searchbar"]').should('exist');
  });

  it('should render sort', () => {
    cy.visit(appUrl);
    
    cy.get('#sort').should('exist');
  });

  it('should render product cards', () => {
    cy.visit(appUrl);
    
    cy.get('.home').within(() => {
      cy.get('.card-container').should('exist');
    });
  });

  it('should render pagination', () => {
    cy.visit(appUrl);
    
    cy.get('.pagination').should('exist');
  });
});