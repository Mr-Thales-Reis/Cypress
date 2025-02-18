describe('Página de Cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  });
  
  it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {
    cy.login('thales@email.com','Senha@123' )
  });
});
