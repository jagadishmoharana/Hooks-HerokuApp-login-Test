describe('Login page Test', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });
  afterEach(() => {
    cy.clearCookies();
  });
  // Check if the login button is visible.
  it('login button should be visible', () => {
    cy.get('[type="submit"]').should('be.visible');
  })

  //verifies if the page contains a field with the placeholder text "Enter your email".
  it('Verifies if there is a field with the placeholder text "Enter your email"',()=>{
    cy.document().then((doc) => {
      const emailInput = doc.querySelector('input[placeholder="Enter your email"]');
      if (emailInput) {
        cy.wrap(emailInput).should('exist');
      } else {
        cy.log('Email input field with placeholder "Enter your email" is missing');
      }
    })
  })
})