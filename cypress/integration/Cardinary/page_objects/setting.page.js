class Setting{
    get firstNameSelector(){
        return cy.get('#app > div.page > div > div > div > div > div.settings-forms > div > div:nth-child(1) > form > div > div:nth-child(3) > label:nth-child(1) > span.input-wrapper > input');
    }

    get lastNameSelector(){
        return cy.get('#app > div.page > div > div > div > div > div.settings-forms > div > div:nth-child(1) > form > div > div:nth-child(3) > label:nth-child(2) > span.input-wrapper > input')
    }

    get emailSelector(){
        return cy.get('#app > div.page > div > div > div > div > div.settings-forms > div > div:nth-child(1) > form > div > div:nth-child(4) > label:nth-child(1) > span.input-wrapper > input');
    }

    get phoneSelector(){
        return cy.get('#app > div.page > div > div > div > div > div.settings-forms > div > div:nth-child(1) > form > div > div:nth-child(4) > label:nth-child(2) > span.input-wrapper > input');
    }

    get adressSelector(){
        return cy.get('#app > div.page > div > div > div > div > div.settings-forms > div > div:nth-child(1) > form > div > div:nth-child(5) > label:nth-child(1) > span.input-wrapper > input');
    }

    get extraAdressSelector(){
        return cy.get('#app > div.page > div > div > div > div > div.settings-forms > div > div:nth-child(1) > form > div > div:nth-child(5) > label:nth-child(2) > span.input-wrapper > input');
    }

    get saveButtonSelector(){
        return cy.get('#app > div.page > div > div > div > div > div.settings-forms > div > div:nth-child(1) > form > div > button');
    }

    get editButtonSelector(){
        return cy.get('#app > div.page > div > div > div > div > div.settings-forms > div > div:nth-child(1) > div > div > div.payment-content > div.payment-content-right > button');
    }

    get cardNumber(){
        return cy.get('#card-number');
    }

    get cvcCard(){
        return cy.get('#card-cvc');
    }

    get expiryCard(){
        return cy.get('#card-expiry');
    }
}
export default new Setting()