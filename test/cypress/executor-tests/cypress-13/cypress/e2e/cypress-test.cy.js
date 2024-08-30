describe('HelloKube App', () => {
  it('should display the header and main content', () => {
    cy.visit('http://localhost:3000');

    cy.get('header h1').should('contain.text', 'HelloKube App');
    cy.get('section p').should('contain.text', 'Welcome to the HelloKube App.');
  });
});
