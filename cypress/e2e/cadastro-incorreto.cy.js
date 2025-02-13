describe('Página de Cadastro', () => {
    it('', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/cadastro')
      
      cy.contains('button', 'Cadastrar').click();
    })
  })