import { main, contactUsPage, constant, pageTail, label } from "./page_objects/index"

context("WattDoesItUse test", ()=>{
    it("Open contact us page and fill in form", ()=>{
        main.wdiuUrl();
        cy.contains('Contact Us').click();
        contactUsPage.fillinFirstNameInput().should('have.value', constant.firstname);
        contactUsPage.fillinLastNameInput().should('have.value', constant.lastname);
        contactUsPage.clickAtInquiryType();
        contactUsPage.clickAtFeedback();
        contactUsPage.emailInput.type(constant.email).should('have.value', constant.email);
        contactUsPage.descriptionInput.type(constant.description);
        contactUsPage.submitButton.click();
        contactUsPage.labelAfterSendContactUsFormSelector.should("contain", label.labelAfterSendContactUsForm );
    })

    it("Request Device Power Consumption fill in form", ()=>{
        contactUsPage.fillInManufacturer().should('have.value', constant.manufacture);
        contactUsPage.fillInModelNumber().should("have.value", constant.modelnumber);
        contactUsPage.emailInput2.type(constant.email).should("have.value", constant.email);
        contactUsPage.fillInWattHours().should("have.value", constant.wattHours);
        contactUsPage.clickAtCategory();
        contactUsPage.selectMonitorCategory();
        contactUsPage.clickAtSubmitButton2();
    })

    it("Open FAQ", ()=>{
        pageTail.frequentlyAskedQuestions()
        pageTail.frequentlyAskedQestionsLabelSelector.should("contain", label.frequentlyAskedQuestionsTitle);
    } )

    it("Open Privacy Policy", ()=>{
        pageTail.privacyPolicy()
        pageTail.privacyPolicyLabelSelector.should("contain",label.privacyPolicyLabel)
        
    })

    it("Open Term of use", ()=>{
        pageTail.termsOfUse()
        pageTail.termsOfUseLabelSelectro.should("contain", label.termOfUseLabel)
    })
})