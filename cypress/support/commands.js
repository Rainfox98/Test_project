import { label, constant } from './index'

const SubmitButton = '#app > div > main > div > div.contact-row > div.contact-us > form > input'
const WDIUURL = 'https://srv.mentalstack.com:3025/'
const WDIUAdminURL = 'https://srv.mentalstack.com:3028/pages/login';
const KlatchURL = 'https://dev.mentalstack.com:3042/login'
const EmailSelector = '#app > div > main > div > div.contact-row > div.contact-us > form > div:nth-child(3) > input[type=email]'
const manufaturerFieldSelector = '#app > div > main > div > div.contact-row > div.request-device > form > div:nth-child(1) > input[type=text]'
const modelFieldSelector = '#app > div > main > div > div.contact-row > div.request-device > form > div:nth-child(2) > input[type=text]'
const wattHoursFieldSelector = '#app > div > main > div > div.contact-row > div.request-device > form > div:nth-child(4) > input[type=number]'
const categoryFieldSelector = '#vs2__combobox > div.vs__selected-options > input'
const tabletSelector = '#vs2__option-4'
const emailFieldSelector2 = '#app > div > main > div > div.contact-row > div.request-device > form > div:nth-child(5) > input[type=email]'
const submitButtonSelector2 = '#app > div > main > div > div.contact-row > div.request-device > form > input'
const labelContactUs = '#app > div > main > div > div.contact-row > div.success-message.active > h2'
const faqSelector = '#app > div > div.footer > div > div > div.footer-content-elements > div.footer-content-left > div.footer-menu > ul > li:nth-child(1) > a'
const faqLabel = '#app > div > main > div > div.title'
const privacyPolicySelector = '#app > div > div.footer > div > div > div.footer-content-elements > div.footer-content-left > div.footer-menu > ul > li:nth-child(2) > a'
const privacyPolicyLabel = '#app > div > main > div > div.title'
const termsOfUse = '#app > div > div.footer > div > div > div.footer-content-elements > div.footer-content-left > div.footer-menu > ul > li:nth-child(3) > a'
const termsOfUseLabel = '#app > div > main > div > div.title'

//WDIU client side commands

Cypress.Commands.add('fillInOnlyFirstNameCheckErrors', () => {
  cy.visit(WDIUURL)
  cy.contains('Contact Us').click()
  cy.get('[name = first_name]').type('Rayan{enter}')
  cy.get('[name = last_name]').should('have.attr', 'class', 'error dirty')
  cy.get('[name = id_inquiry_type]').should('have.attr', 'class', 'v-select vs--single vs--searchable error dirty')
  cy.get('[name = email]').should('have.attr', 'class', 'error dirty')
  cy.get('[name = text]').should('have.attr', 'class', 'error dirty')
})

Cypress.Commands.add('fillInOnlyLastNameCheckErrors', () => {
  cy.get('[name = last_name]').type('Zero{enter}')
  cy.get('[name = first_name]').should('have.attr', 'class', 'error dirty')
  cy.get('[name = id_inquiry_type]').should('have.attr', 'class', 'v-select vs--single vs--searchable error dirty')
  cy.get('[name = email]').should('have.attr', 'class', 'error dirty')
  cy.get('[name = text]').should('have.attr', 'class', 'error dirty')
})

Cypress.Commands.add('fillInOnlyInquiryFieldCheckErrors', () => {
  cy.get('[name = id_inquiry_type]').click()
  cy.contains('Feedback').click()
  cy.get(SubmitButton).click()
  cy.get('[name = first_name]').should('have.attr', 'class', 'error dirty')
  cy.get('[name = last_name]').should('have.attr', 'class', 'error dirty')
  cy.get('[name = email]').should('have.attr', 'class', 'error dirty')
  cy.get('[name = text]').should('have.attr', 'class', 'error dirty')
})

Cypress.Commands.add('fillInOnlyEmailCheckErrors', () => {
  cy.get(EmailSelector).type('Zero@numder.fal{enter}')
  cy.get('[name = first_name]').should('have.attr', 'class', 'error dirty')
  cy.get('[name = id_inquiry_type]').should('have.attr', 'class', 'v-select vs--single vs--searchable error dirty')
  cy.get('[name = first_name]').should('have.attr', 'class', 'error dirty')
  cy.get('[name = text]').should('have.attr', 'class', 'error dirty')
})

Cypress.Commands.add('incorrectEmailError', () => {
  cy.get(EmailSelector).type('a32nxj/zx/?1{enter}')
  cy.get('[name = first_name]').should('have.attr', 'class', 'error dirty')
  cy.get('[name = id_inquiry_type]').should('have.attr', 'class', 'v-select vs--single vs--searchable error dirty')
  cy.get('[name = first_name]').should('have.attr', 'class', 'error dirty')
  cy.get('[name = text]').should('have.attr', 'class', 'error dirty')
  cy.get('[name = email]').should('have.attr', 'class', 'error dirty')
})

Cypress.Commands.add('fillInOnlyCommentsOrQuestions', () => {
  cy.get('[name = text]').type('rendom text{enter}')
  cy.get(SubmitButton).click()
  cy.get('[name = first_name]').should('have.attr', 'class', 'error dirty')
  cy.get('[name = id_inquiry_type]').should('have.attr', 'class', 'v-select vs--single vs--searchable error dirty')
  cy.get('[name = first_name]').should('have.attr', 'class', 'error dirty')
  cy.get('[name = email]').should('have.attr', 'class', 'error dirty')
})

Cypress.Commands.add('fillInContactUsForm', () => {
  cy.visit(WDIUURL)
  cy.contains('Contact Us').click()
  cy.get('[name = first_name]').type('Rayan{enter}').should('have.value', 'Rayan')
  cy.get('[name = last_name]').type('Zero{enter}').should('have.value', 'Zero')
  cy.get('[name = id_inquiry_type]').click()
  cy.contains('Feedback').click()
  cy.get(EmailSelector).type('Zero@numder.fal{enter}').should('have.value', 'Zero@numder.fal')
  cy.get('[name = text]').type('random text').should('have.value', 'random text')
  cy.get(SubmitButton).click()
  cy.wait(8000)
  cy.get(labelContactUs).should('contain', label.labelAfterSendContactUsForm)
})

Cypress.Commands.add('fillInDevicePowerConsumptionForm', () => {
  cy.get(manufaturerFieldSelector).type(constant.manufacturer).should('have.value', constant.manufacturer)
  cy.get(modelFieldSelector).type(constant.modelNumber).should('have.value', constant.modelNumber)
  cy.get(categoryFieldSelector).click()
  cy.get(tabletSelector).click()
  cy.get(wattHoursFieldSelector).type(constant.wattHours).should('have.value', constant.wattHours)
  cy.get(emailFieldSelector2).type(constant.email).should('have.value', constant.email)
  cy.get(submitButtonSelector2).click()
})

Cypress.Commands.add('testPageTailLinks', () => {
  cy.get(faqSelector).click()
  cy.get(faqLabel).should('contain', label.frequentlyAskedQuestionsTitle)
  cy.get(privacyPolicySelector).click()
  cy.get(privacyPolicyLabel).should('contain', label.privacyPolicyLabel)
  cy.get(termsOfUse).click()
  cy.get(termsOfUseLabel).should('contain', label.termOfUseLabel)
})

//WDIU admin side commands

Cypress.Commands.add('wdiuLoginTest', () => {
  cy.visit(WDIUAdminURL);
  cy.get('[name = email]').type(constant.trueEmail).should('have.value', constant.trueEmail)
  cy.get('[name = password]').type('qwerty').should('have.value', 'qwerty');
  cy.get('[name = button]').click()
})

//Klatch commands

Cypress.Commands.add('klatchLoginTest', () => {
  cy.visit(KlatchURL);
  cy.get('#root > main > div > div > div.authStyles_formWr__rs6Q- > form > div.controls_inputWr__16SRf.authStyles_emailInput__sH8kd > input').type('vsysoev@mentalstack.com').should('have.value', 'vsysoev@mentalstack.com');
  cy.get('#root > main > div > div > div.authStyles_formWr__rs6Q- > form > div.controls_inputWr__16SRf.authStyles_passwordInput__R3i_e > input').type('qwepoiurty').should('have.value', 'qwepoiurty');
  cy.get('#root > main > div > div > div.authStyles_formWr__rs6Q- > form > button').click();
  cy.wait(5000)
  cy.get('#root > main > div > div.dashboard_gradientWr__1SNr4 > div > div.dashboard_welcome__2MEMu > p').should('contain', 'We’re here to help. Please let us know what you need. ');
})

Cypress.Commands.add('headerTest', () => {
  cy.get('#root > main > header > nav > div.mainNavigation_leftGroup__2Nf0B > div.mainNavigation_linksWr__34zQS > a:nth-child(2)').click();
  cy.get('#root > main > h1').should('contain', 'Find');
})
