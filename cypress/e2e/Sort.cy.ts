describe('sort products', () => {
  const appUrl = 'http://localhost:3000/';
  
  it('exists in page', () => {
    cy.visit(appUrl);
    
    cy.get('#sort').should('exist');
  });

  it('can be focused', () => {
    cy.visit(appUrl);
    
    cy.get('#sort').focus();
  });

  it('contains filters', () => {
    cy.visit(appUrl);
    
    cy.get('#sort').contains('Price: Low to High');
    cy.get('#sort').contains('Price: High to Low');
    cy.get('#sort').contains('Name: A-Z');
    cy.get('#sort').contains('Name: Z-A');
  });
  
  it('can select filters', () => {
    cy.visit(appUrl);
    
    cy.get('#sort').select('Price: Low to High');
    cy.get('#sort').select('Price: High to Low');
    cy.get('#sort').select('Name: A-Z');
    cy.get('#sort').select('Name: Z-A');
  });

  it('applies filters', () => {
    cy.visit(appUrl);
    
    cy.get('#sort').select('Name: Z-A');
    cy.get('.home').within(() => {
      cy.get('.card-title').first().should('contain.text', 'K');
    });
  });
});