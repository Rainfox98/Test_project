import constant from "../support_element/constants";

class ContactUsPage{
    fillinFirstNameInput(){
        const firstName = '[name="first_name"]'
       return cy.get(firstName).type(constant.firstname);
    }

    fillinLastNameInput(){
        const lastName = '[name="last_name"]'
        return cy.get(lastName).type(constant.lastname);
    }

    clickAtInquiryType(){
        const inquiryType = '[placeholder="Inquiry type"]'
        return cy.get(inquiryType).click();
    }

    clickAtFeedback(){
        const feedbackSelector = '#app > div > main > div > div.contact-row > div.contact-us > form > div:nth-child(2) > div > ul > li:nth-child(3)';
        return cy.get(feedbackSelector).click();
    }

    get emailInput(){
        const emailFieldSelector = '#app > div > main > div > div.contact-row > div.contact-us > form > div:nth-child(3) > input[type=email]';
        return cy.get(emailFieldSelector);
    }

    get descriptionInput(){
        const descriptionFieldSelector = '#app > div > main > div > div.contact-row > div.contact-us > form > div:nth-child(4) > textarea';
        return cy.get(descriptionFieldSelector);
    }

    get submitButton(){
        const submitButtonSelector = '#app > div > main > div > div.contact-row > div.contact-us > form > input';
        return cy.get(submitButtonSelector);
    }

    fillInManufacturer(){
        const manufaturerFieldSelector = '#app > div > main > div > div.contact-row > div.request-device > form > div:nth-child(1) > input[type=text]';
        return cy.get(manufaturerFieldSelector).type(constant.manufacture);
    }

    fillInModelNumber(){
        const modelFieldSelector = '#app > div > main > div > div.contact-row > div.request-device > form > div:nth-child(2) > input[type=text]';
        return cy.get(modelFieldSelector).type(constant.modelnumber)
    }

    fillInWattHours(){
        const wattHoursFieldSelector = '#app > div > main > div > div.contact-row > div.request-device > form > div:nth-child(4) > input[type=number]';
        return cy.get(wattHoursFieldSelector).type(constant.wattHours)
    }

    clickAtCategory(){
        const categoryFieldSelector = '#app > div > main > div > div.contact-row > div.request-device > form > div:nth-child(5) > div > div > div.vs__selected-options > input';
        return cy.get(categoryFieldSelector).click()
    }

    selectMonitorCategory(){
        const monitorSelector = '#app > div > main > div > div.contact-row > div.request-device > form > div:nth-child(5) > div > ul > li:nth-child(3)';
        return cy.get(monitorSelector).click()
    }

    get emailInput2(){
        const emailFieldSelector2 = '#app > div > main > div > div.contact-row > div.request-device > form > div:nth-child(3) > input[type=email]';
        return cy.get(emailFieldSelector2);
    }

    clickAtSubmitButton2(){
        const submitButtonSelector2 = '#app > div > main > div > div.contact-row > div.request-device > form > input';
        return cy.get(submitButtonSelector2).click();
    }

    get labelAfterSendContactUsFormSelector(){
        return cy.get('#app > div > main > div > div.contact-row > div.success-message.active > h2');
    }

}
export default new ContactUsPage()