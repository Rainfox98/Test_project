class Header{
get settingButtonSelector(){
    return cy.get('#app > div.page > header > div.header__actions > button:nth-child(1)');
    }

get dashboardButtonSelector(){
    return cy.get('#app > div.page > header > div.header__actions > button:nth-child(2)');
    }

get newMeiloutButtonSelector(){
    return cy.get('#app > div.page > header > div.header__actions > button.button.primary');
    }   

get logoutButtonSelector(){
    return cy.get('#app > div.page > header > div.header__actions > a');
    }
}
export default new Header()