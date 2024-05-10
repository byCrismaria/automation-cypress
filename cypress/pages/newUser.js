import { elLoginPageLocators, elCreatAccount, elDeletedAccount } from "./components"

class registerUser {

    go(){
        cy.visit('/login')
        cy.title().should('eq', 'Automation Exercise - Signup / Login')
    }    
    userRegister(dados) {
        //INFORM EMAIL AND USER
        cy
        .get(elLoginPageLocators.usernameInput).first().click().type('cytestes')
        .get(elLoginPageLocators.emailInput).first().click().type(dados.email)
        .get(elLoginPageLocators.signupButton).click()
        //ENTER ACCOUNT INFORMATION
        .get(elLoginPageLocators.genderId).check({ force: true })
        .get(elLoginPageLocators.passwordInput).click().type(dados.emailsenha)
        .get(elLoginPageLocators.selectDay).select(dados.day).should('have.value', '28')
        .get(elLoginPageLocators.selectMonth).select(dados.month).should('have.value', '3')
        .get(elLoginPageLocators.selectYears).select(dados.year).should('have.value', '2000')
        .get(elLoginPageLocators.selectOption).click()
        //ADDRESS INFORMATION
        .get(elLoginPageLocators.firstNameInput).click().type(dados.name)
        .get(elLoginPageLocators.lastNameInput).click().type(dados.lastName)
        .get(elLoginPageLocators.companyInput).click().type(dados.companyName)
        .get(elLoginPageLocators.addressData).click().type(dados.address1)
        .get(elLoginPageLocators.addressData2).click().type(dados.address2)
        .get(elLoginPageLocators.countryData).select(dados.country).should('have.value', 'Australia')
        .get(elLoginPageLocators.stateDate).click().type(dados.state)
        .get(elLoginPageLocators.cityDate).click().type(dados.city)
        .get(elLoginPageLocators.zipcodeDate).click().type(dados.zipcode)
        .get(elLoginPageLocators.mobilenumber).click().type(dados.mobile)
        .get(elLoginPageLocators.creatAcount).click()
    }

    checkAccountCreated(dados) {
        cy
        .get(elCreatAccount.messageCongratulations).contains(dados.messageCongratulations).should('exist')
        .get(elCreatAccount.continueButton).click()
    }
    checkAccountDeleted(dados){
        cy
        .get(elDeletedAccount.deleteButton).click()
        .get(elDeletedAccount.confirmDeleteButton).contains(dados.messageDeleteAccount).should('exist')

    }
}
export default new registerUser;

