class Tail{
    frequentlyAskedQuestions(){
        return cy.get('#app > div > div.footer > div > div > div.footer-content-elements > div.footer-content-left > div.footer-menu > ul > li:nth-child(1) > a').click()
    }

    privacyPolicy(){
        return cy.get('#app > div > div.footer > div > div > div.footer-content-elements > div.footer-content-left > div.footer-menu > ul > li:nth-child(2) > a').click()
    }

    termsOfUse(){
        return cy.get('#app > div > div.footer > div > div > div.footer-content-elements > div.footer-content-left > div.footer-menu > ul > li:nth-child(3) > a').click()
    }
}
export default new Tail()