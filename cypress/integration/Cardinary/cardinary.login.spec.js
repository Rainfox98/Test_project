context('Cardinary sign in page test', ()=>{
    before(()=>{
        cy.visit('https://dev.mentalstack.com:3035/auth/login')
    })
    it('Enter login', ()=>{
        cy.get('#app > div.auth > div > div > div > div > form > div > div:nth-child(1) > label > span.input-wrapper > input').type('vsysoev@mentalstack.com').should('have.value', 'vsysoev@mentalstack.com')
    })

    it('Enter password', ()=>{
        cy.get('#app > div.auth > div > div > div > div > form > div > div:nth-child(2) > label > span.input-wrapper > input').type('qwerty123').should('have.value', 'qwerty123' )
    })

    it('Click login button', ()=>{
        cy.get('#app > div.auth > div > div > div > div > form > div > div.form-buttons > button').click()
        cy.wait(2000)
        cy.url().should('eq','https://dev.mentalstack.com:3035/')
    })
})