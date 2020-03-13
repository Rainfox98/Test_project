context("Negative testing form Contact Us", ()=>{
    it("Fill in only First name", ()=>{
        cy.fillInOnlyFirstNameCheckErrors();
    })

    it("Fill in only First name", ()=>{
        cy.reload();
        cy.fillInOnlyLastNameCheckErrors();
    })

    it("Select only inquiry type", ()=>{
        cy.reload();
        cy.fillInOnlyInquiryFieldCheckErrors();
    
    })

    it("Fill in only email field(correct form)", ()=>{
        cy.reload();
        cy.fillInOnlyEmailCheckErrors();
    })

    it("Fill in only email field(incorrect form)", ()=>{
        cy.reload();
        cy.incorrectEmailError();
    })

    it('Fill in only comments ot questions', ()=>{
        cy.reload();
        cy.fillInOnlyCommentsOrQuestions();
    })
})