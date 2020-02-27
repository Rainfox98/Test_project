context("simple test", ()=>{
    beforeEach(() => {
        cy.visit('https://srv.mentalstack.com:3025')})
    it("open browser", ()=>{
        cy.contains('Contact Us').click()
        cy.get('[name="first_name"]').type("Ricardo").should('have.value', "Ricardo")
        cy.get('[name="last_name"]').type("Milos").should('have.value', "Milos")
        cy.get('[placeholder="Inquiry type"]').click().get('#app > div > main > div > div.contact-row > div.contact-us > form > div:nth-child(2) > div > ul > li:nth-child(3)').contains("Feedback").click()
        cy.get('#app > div > main > div > div.contact-row > div.contact-us > form > div:nth-child(3) > input[type=email]').type("pistolinthehand@pistrunum.lil").should('have.value', "pistolinthehand@pistrunum.lil")
        cy.get('#app > div > main > div > div.contact-row > div.contact-us > form > div:nth-child(4) > textarea').type("<script>document.location='https://srv.mentalstack.com:3025/contact'+document.cookie</script>")
        cy.get('#app > div > main > div > div.contact-row > div.contact-us > form > input').click()
    })
})