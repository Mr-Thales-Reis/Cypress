describe('Página de Cadastro', () => {
  it('Preencher os campos do formulário incorretamente e exibir mensagem ao usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/cadastro')
    cy.get('[data-test="input-name"]').type('Thales dos Reis');
    cy.get('[data-test="submit-button"]').click();
    cy.contains('É necessário informar um endereço de email').should('be.visible');
    cy.contains('Crie uma senha').should('be.visible');
    cy.contains('Repita a senha criada acima').should('be.visible');
  })
})