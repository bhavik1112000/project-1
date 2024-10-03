describe('search bar', () => {
  const appUrl = 'http://localhost:3000/';

  it('exists in page', () => {
    cy.visit(appUrl);
    
    cy.get('[data-testid="searchbar"]').should('exist');
  });

  it('shows placeholder', () => {
    cy.visit(appUrl);

    const placeholderText = 'Search...';
    cy.get('[data-testid="searchbar"]').should('have.attr', 'placeholder', placeholderText);
  });

  it('can be focused', () => {
    cy.visit(appUrl);

    cy.get('[data-testid="searchbar"]').focus();
  });

  it('keyword input', () => {
    cy.visit(appUrl);
    
    cy.get('[data-testid="searchbar"]').type('green').should('have.value', 'green');
  });

  it('lists products', () => {
    cy.visit(appUrl);
    
    cy.get('[data-testid="searchbar"]').type('green');
    cy.get('.home').within(() => {
      cy.contains('Green').should('exist');
    });
  });

  it('accurate results', () => {
    cy.visit(appUrl);
    
    cy.get('[data-testid="searchbar"]').type('pink');
    cy.get('.home').within(() => {
      cy.contains('Pink').should('not.exist');
    });

    cy.get('[data-testid="searchbar"]').clear();
    cy.get('[data-testid="searchbar"]').type('red');
    cy.get('.home').within(() => {
      cy.contains('Red').should('exist');
    });
  });
});