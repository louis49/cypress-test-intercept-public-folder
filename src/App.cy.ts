import App from "@/App.vue";

describe('App.vue', () => {

  it('should fetch on button click and mock the response', () => {

    cy.intercept('POST', 'http://localhost:3000/api/users/login', (req) => {
      console.log('Intercepted request:', req); // Log the request for debugging
      req.reply({
        statusCode: 200,
        body: { token: 'fake-token' }, // Mock response
      });
    }).as('loginRequest');

    cy.mount(App, {
      global: {
        provide: {

        }
      },
    });

    cy.get('#button').click();

    cy.wait('@loginRequest');
  });
});