import {loginpage, setting, header, constant } from '../Cardinary/page_objects'

context('Cardinary sign in page test', ()=>{
    before(()=>{
        loginpage.loginURL();
    })
    it('Enter login', ()=>{
        loginpage.emailFieldSelector.type('vsysoev@mentalstack.com').should('have.value', 'vsysoev@mentalstack.com');
    })

    it('Enter password', ()=>{
        loginpage.passwordFieldSelector.type('qwerty123').should('have.value', 'qwerty123' );
    })

    it('Click login button', ()=>{
        loginpage.loginButtonSelector.click()
        cy.url().should('eq','https://dev.mentalstack.com:3035/');
    })

    it("Open setting page", ()=>{
        header.settingButtonSelector.click();
        setting.cardNumber.type('4242424242424242')
        setting.cvcCard.type('123');
        setting.expiryCard.type('121234');
        
    })

    it("Test", ()=>{
        cy.url().should('eq', 'https://dev.mentalstack.com:3035/company-settings');
        setting.firstNameSelector.type(constant.FirstName).should('eq', constant.FirstName);
        setting.lastNameSelector.type(constant.LastName).should('eq', constant.LastName);
        setting.emailSelector.type(constant.Email).should('eq', constant.Email);
        setting.phoneSelector.type(constant.Phone).should('eq', constant.Phone);
        setting.adressSelector.type(constant.Address).should('eq', constant.Address);
        setting.extraAdressSelector.type(constant.ExtraAdress).should('eq', constant.ExtraAdress);
        setting.saveButtonSelector.click().should();
    })
})