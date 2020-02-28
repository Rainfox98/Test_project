import { main, contactuspage, constant, tail } from "./page_objects/index"

context("WattDoesItUse test", ()=>{
    it("Open contact us page and fill in form", ()=>{
        main.wdiuUrl()
        cy.contains('Contact Us').click()
        contactuspage.firstName().type(constant.firstname).should('have.value', constant.firstname)
        contactuspage.lastName().type(constant.lastname).should('have.value', constant.lastname)
        contactuspage.inquiryType().click()
        contactuspage.Feedbackselect()
        contactuspage.emailInput().type(constant.email).should('have.value', constant.email)
        contactuspage.descriptionInput().type(constant.description)
        contactuspage.submitButton().click()
    })

    it("Request Device Power Consumption fill in form", ()=>{
        contactuspage.manufacturer()
        contactuspage.modelNumber()
        contactuspage.emailInput2().type(constant.email)
        contactuspage.wattHours()
        contactuspage.selectCategory()
        contactuspage.monitorCategory()
        contactuspage.submitButton2()
    })

    it("Open FAQ", ()=>{
        tail.frequentlyAskedQuestions()
    } )

    it("Open Privacy Policy", ()=>{
        tail.privacyPolicy()
    })

    it("Open Term of use", ()=>{
        tail.termsOfUse()
    })
})