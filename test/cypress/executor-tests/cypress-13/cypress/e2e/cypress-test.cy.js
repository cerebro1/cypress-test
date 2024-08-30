describe('HelloKube App', () => {
  it('should display "Hello, Kubernetes!" for any other route', () => {
    cy.visit('http://192.168.103.2:30865/');

    cy.contains('Hello, Kubernetes!').should('be.visible');
  });
});

