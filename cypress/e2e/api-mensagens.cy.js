describe('Api Adopet', ()=>{
    const authorization = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjNTZlODBmYS1jMzFmLTQyOGEtODU3Mi1lODQzYzUwYWI5ODciLCJhZG9wdGVyTmFtZSI6Im9sYSIsImlhdCI6MTczOTkwMDIzNCwiZXhwIjoxNzQwMTU5NDM0fQ.rtmoGdsDrSqVuFxYmX0dwUb_nk6CgfDSRwP2kJ_EY6M`

    it('Mensagem de testes da API', ()=>{
        cy.request({
            method: 'GET',
            url: 'https://adopet-frontend-cypress.vercel.app/static/css/main.https://adopet-frontend-cypress.vercel.app/static/media/message.a71fd916fbc1491a5831.svg.css',
            Headers: {authorization},
        }).then((res)=>{
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.propery('msg')
        })
    })
})