/*
Agora é com você! A partir do Roteiro de testes abaixo, escreva um teste e complemente sua suíte no login:

Funcionalidade: Login no site Adopet

Cenário: Falha no login do sistema

Passos:

O usuário acessa a página de login.
O usuário insere um e-mail e senha fora do padrão aceito nos campos correspondentes.
O usuário clica no botão de login.
Resultados Esperados:

O sistema valida as credenciais fornecidas.
O sistema exibe mensagens de erro específicas para o e-mail e senha inseridos incorretamente, como: "Por favor, verifique o e-mail digitado" e/ou "A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres".
Regra de Negócio:

O e-mail deve ter um formato válido.
A senha deve conter pelo menos uma letra maiuscula, um número e ter entre 6 e 15 caracteres
Você pode conferir a sugestão do instrutor clicando em Ver Opinião do instrutor

Boa prática!
*/

describe('Página de login', () => {

    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="login-button"]').click();
 
    })
        it('Deve preencher os campos do login incorretamente e exibir mensagens de erro ao usuário na página', () => {
          cy.get('[data-test="input-loginEmail"]').type('marjorie3');
          cy.get('[data-test="input-loginPassword"]').type('123');
          cy.get('[data-test="submit-button"]').click();
          cy.contains('Por favor, verifique o email digitado').should('be.visible')
          cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')
         
        })
  })