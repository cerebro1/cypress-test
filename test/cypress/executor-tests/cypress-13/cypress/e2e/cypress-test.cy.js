describe('HelloKube App', () => {
  it('should display "Hello, Kubernetes!" for any other route', () => {
    cy.request('http://192.168.103.2/');

    cy.contains('Hello, Kubernetes!').should('be.visible');
  });
});

