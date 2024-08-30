describe('HelloKube App', () => {
  it('should display "Hello, Kubernetes!" for any other route', () => {
    cy.request('http://10.111.240.251:80/');

    cy.contains('Hello, Kubernetes!').should('be.visible');
  });
});

