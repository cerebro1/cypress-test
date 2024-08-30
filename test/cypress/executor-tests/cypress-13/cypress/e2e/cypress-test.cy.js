describe('HelloKube App', () => {
  it('should display "Hello, Kubernetes!" for any other route', () => {
    cy.request('http://localhost:3000/');

    cy.contains('Hello, Kubernetes!').should('be.visible');
  });
});

