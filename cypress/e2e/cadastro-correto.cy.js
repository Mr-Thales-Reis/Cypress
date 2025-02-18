describe('Página de Cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/cadastro')
    
  });
  it(' Função em commands que melhora o funcionamento do sistema de teste automatizado', () => {
    
    cy.Cadastro('thales@gmail.com, Thales, Senha@123')
  })
})
