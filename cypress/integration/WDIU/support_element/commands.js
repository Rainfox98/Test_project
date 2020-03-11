const SubmitButton = '#app > div > main > div > div.contact-row > div.contact-us > form > input'

Cypress.Commands.add('FillInOnlyFirstNameCheckErrors', ()=>{
    cy.get('[name = first_name]').type("Rayan{enter}")
        cy.get('[name = last_name]').should('have.attr','class', 'error dirty')
        cy.get('[name = id_inquiry_type]').should('have.attr','class', 'v-select vs--single vs--searchable error dirty')
        cy.get('[name = email]').should('have.attr','class', 'error dirty')
        cy.get('[name = text]').should('have.attr','class', 'error dirty')
})

Cypress.Commands.add('FillInOnlyLastNameCheckErrors', ()=>{
    cy.get('[name = last_name]').type("Zero{enter}")
        cy.get('[name = first_name]').should('have.attr','class', 'error dirty')
        cy.get('[name = id_inquiry_type]').should('have.attr','class', 'v-select vs--single vs--searchable error dirty')
        cy.get('[name = email]').should('have.attr','class', 'error dirty')
        cy.get('[name = text]').should('have.attr','class', 'error dirty')
})

Cypress.Commands.add('FillInOnlyInquiryFieldCheckErrors', ()=>{
    cy.get('[name = id_inquiry_type]').click()
    cy.contains('Feedback').click()
    cy.get(SubmitButton).click()
        cy.get('[name = first_name]').should('have.attr','class', 'error dirty')
        cy.get('[name = last_name]').should('have.attr','class', 'error dirty')
        cy.get('[name = email]').should('have.attr','class', 'error dirty')
        cy.get('[name = text]').should('have.attr','class', 'error dirty')
})

Cypress.Commands.add('FillInOnlyEmailCheckErrors', ()=>{
    cy.get('#app > div > main > div > div.contact-row > div.contact-us > form > div:nth-child(3) > input[type=email]').type("Zero@numder.fal{enter}")
        cy.get('[name = first_name]').should('have.attr','class', 'error dirty')
        cy.get('[name = id_inquiry_type]').should('have.attr','class', 'v-select vs--single vs--searchable error dirty')
        cy.get('[name = first_name]').should('have.attr','class', 'error dirty')
        cy.get('[name = text]').should('have.attr','class', 'error dirty')
})

Cypress.Commands.add("IncorrectEmailError", ()=>{
    cy.get('#app > div > main > div > div.contact-row > div.contact-us > form > div:nth-child(3) > input[type=email]').type("a32nxj/zx/?1{enter}")
        cy.get('[name = first_name]').should('have.attr','class', 'error dirty')
        cy.get('[name = id_inquiry_type]').should('have.attr','class', 'v-select vs--single vs--searchable error dirty')
        cy.get('[name = first_name]').should('have.attr','class', 'error dirty')
        cy.get('[name = text]').should('have.attr','class', 'error dirty')
        cy.get('[name = email]').should('have.attr','class', 'error dirty')
})

Cypress.Commands.add("FillInOnlyCommentsOrQuestions", ()=>{
    cy.get('[name = text]').type('rendom text{enter}')
    cy.get(SubmitButton).click()
        cy.get('[name = first_name]').should('have.attr','class', 'error dirty')
        cy.get('[name = id_inquiry_type]').should('have.attr','class', 'v-select vs--single vs--searchable error dirty')
        cy.get('[name = first_name]').should('have.attr','class', 'error dirty')
        cy.get('[name = email]').should('have.attr','class', 'error dirty')
})
