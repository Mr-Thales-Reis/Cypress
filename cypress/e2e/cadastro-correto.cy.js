describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/cadastro')
    cy.get('[data-test="input-name"]').type('Thales dos Reis');
    cy.get('[data-test="input-email"]').type('emailteste@gmail.com');
    cy.get('[data-test="input-password"]').type('Abc@123');
    cy.get('[data-test="input-confirm-password"]').type('Abc@123')
    cy.contains('button', 'Cadastrar').click();
  })
})