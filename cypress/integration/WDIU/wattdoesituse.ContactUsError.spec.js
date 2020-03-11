import { main} from "./page_objects/index"

context("Negative testing form Contact Us", ()=>{
    it("Fill in only First name", ()=>{
        main.wdiuUrl();
        cy.contains('Contact Us').click();
        cy.FillInOnlyFirstNameCheckErrors();
    })

    it("Fill in only First name", ()=>{
        cy.reload();
        cy.FillInOnlyLastNameCheckErrors();
    })

    it("Select only inquiry type", ()=>{
        cy.reload();
        cy.FillInOnlyInquiryFieldCheckErrors();
    
    })

    it("Fill in only email field(correct form)", ()=>{
        cy.reload();
        cy.FillInOnlyEmailCheckErrors();
    })

    it("Fill in only email field(incorrect form)", ()=>{
        cy.reload();
        cy.IncorrectEmailError();
    })

    it('Fill in only comments ot questions', ()=>{
        cy.reload();
        cy.FillInOnlyCommentsOrQuestions();
    })
})