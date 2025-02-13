describe('Página de Cadastro', () => {
  it('Deve preencher os campos do formulário para cadastrar um novo usuário ', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/cadastro')
    cy.get('[data-test="input-name"]').type('Thales dos Reis');
    cy.get('[data-test="input-email"]').type('emailteste@gmail.com');
    cy.get('[data-test="input-password"]').type('Abc@123');
    cy.get('[data-test="input-confirm-password"]').type('Abc@123')
    cy.get('[data-test="submit-button"]').click();
  })
})