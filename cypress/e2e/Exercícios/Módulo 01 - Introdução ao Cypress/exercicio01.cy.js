describe('template spec', () => {
    it('deve carregar a página corretamente e clicar no botão ‘Ver pets disponíveis para adoção”', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/')
      cy.get('.button').click();  
    })
  })