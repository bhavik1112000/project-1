describe('search bar', () => {
  const appUrl = 'http://localhost:3000/';
  
  it('exists in page', () => {
    cy.visit(appUrl);
    cy.get('#sort').should('exist');
  });
});