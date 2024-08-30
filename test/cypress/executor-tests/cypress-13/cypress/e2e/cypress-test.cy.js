describe('HelloKube App', () => {
  it('should display the header and main content', () => {
    cy.request('http://192.168.103.2:30865');
    cy.contains('Hello, Kubernetes!').should('be.visible');
  });
});
