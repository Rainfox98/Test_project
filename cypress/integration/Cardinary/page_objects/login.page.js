class LoginPage{

    loginURL(){
        cy.visit('https://dev.mentalstack.com:3035/auth/login')
    }

    get emailFieldSelector(){
        return cy.get('#app > div.auth > div > div > div > div > form > div > div:nth-child(1) > label > span.input-wrapper > input');
    }

    get passwordFieldSelector(){
        return cy.get('#app > div.auth > div > div > div > div > form > div > div:nth-child(2) > label > span.input-wrapper > input');
    }

    get loginButtonSelector(){
        return cy.get('#app > div.auth > div > div > div > div > form > div > div.form-buttons > button');
    }
}
export default new LoginPage()