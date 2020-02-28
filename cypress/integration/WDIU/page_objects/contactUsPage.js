import constants from "./constants";

class ContactUsPage{
    firstName(){
        return cy.get('[name="first_name"]');
    }

    lastName(){
        return cy.get('[name="last_name"]');
    }

    inquiryType(){
        return cy.get('[placeholder="Inquiry type"]');
    }

    Feedbackselect(){
        return cy.get('#app > div > main > div > div.contact-row > div.contact-us > form > div:nth-child(2) > div > ul > li:nth-child(3)').click();
    }

    emailInput(){
        return cy.get('#app > div > main > div > div.contact-row > div.contact-us > form > div:nth-child(3) > input[type=email]');
    }

    descriptionInput(){
        return cy.get('#app > div > main > div > div.contact-row > div.contact-us > form > div:nth-child(4) > textarea');
    }

    submitButton(){
        return cy.get('#app > div > main > div > div.contact-row > div.contact-us > form > input');
    }

    manufacturer(){
        return cy.get('#app > div > main > div > div.contact-row > div.request-device > form > div:nth-child(1) > input[type=text]').type(constants.manufacture);
    }

    modelNumber(){
        return cy.get('#app > div > main > div > div.contact-row > div.request-device > form > div:nth-child(2) > input[type=text]').type(constants.modelnumber)
    }

    wattHours(){
        return cy.get('#app > div > main > div > div.contact-row > div.request-device > form > div:nth-child(4) > input[type=number]').type(constants.wattHours)
    }

    selectCategory(){
        return cy.get('#app > div > main > div > div.contact-row > div.request-device > form > div:nth-child(5) > div > div > div.vs__selected-options > input').click()
    }

    monitorCategory(){
        return cy.get('#app > div > main > div > div.contact-row > div.request-device > form > div:nth-child(5) > div > ul > li:nth-child(3)').click()
    }

    emailInput2(){
        return cy.get('#app > div > main > div > div.contact-row > div.request-device > form > div:nth-child(3) > input[type=email]')
    }

    submitButton2(){
        return cy.get('#app > div > main > div > div.contact-row > div.request-device > form > input').click()
    }

}
export default new ContactUsPage()