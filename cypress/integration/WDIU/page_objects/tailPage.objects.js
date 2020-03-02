class Tail{
    frequentlyAskedQuestions(){
        return cy.get('#app > div > div.footer > div > div > div.footer-content-elements > div.footer-content-left > div.footer-menu > ul > li:nth-child(1) > a').click()
    }

    get frequentlyAskedQestionsLabelSelector(){
        return cy.get("#app > div > main > div > div.title")
    }

    privacyPolicy(){
        return cy.get('#app > div > div.footer > div > div > div.footer-content-elements > div.footer-content-left > div.footer-menu > ul > li:nth-child(2) > a').click()
    }

    get privacyPolicyLabelSelector(){
        return cy.get('#app > div > main > div > div.title')
    }

    termsOfUse(){
        return cy.get('#app > div > div.footer > div > div > div.footer-content-elements > div.footer-content-left > div.footer-menu > ul > li:nth-child(3) > a').click()
    }

    get termsOfUseLabelSelectro(){
        return cy.get("#app > div > main > div > div.title");
    }
}
export default new Tail()