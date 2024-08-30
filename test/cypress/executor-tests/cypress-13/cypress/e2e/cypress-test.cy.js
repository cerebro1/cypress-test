describe('HelloKube App', () => {
  it('should display the header content when /header is visited', () => {
    cy.visit('http://192.168.103.2:30865/header');

    cy.get('header h1').should('contain.text', 'HelloKube App'); // Adjust this to match the content in your header.html
  });

  it('should display the main content when /main is visited', () => {
    cy.visit('http://192.168.103.2:30865/main');

    cy.get('section p').should('contain.text', 'Welcome to the HelloKube App.'); // Adjust this to match the content in your main.html
  });

  it('should display "Hello, Kubernetes!" for any other route', () => {
    cy.visit('http://192.168.103.2:30865/');

    cy.contains('Hello, Kubernetes!').should('be.visible');

    cy.visit('http://192.168.103.2:30865/any-other-path');

    cy.contains('Hello, Kubernetes!').should('be.visible');
  });
});

