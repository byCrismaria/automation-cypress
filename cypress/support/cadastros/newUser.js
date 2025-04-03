import { elLoginPageLocators, elCreatAccount, elDeletedAccount, elLoginUser } from "../../components/components"

const registerUser = {

    go:() =>{
        cy.allure().step("Acessar página de login");
        cy.visit('/login')
        cy.title().should('eq', 'Automation Exercise - Signup / Login')
    }, 
    
    gerrarErro: () => {
        cy.allure().step("Acessar página de login");
        cy.visit('/login')
        cy.title().should('eq', 'Automation Exercise - Signup / Erro')
    }, 

    userRegister: (dados) => {
        //INFORM EMAIL AND USER
        cy.allure().step("Preencher formulário de cadastro");
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
    },

    checkAccountCreated: (dados) => {
        cy.allure().step("Verficar se a conta foi criada com sucesso");
        cy
        .get(elCreatAccount.messageCongratulations).contains(dados.messageCongratulations).should('exist')
        .get(elCreatAccount.continueButton).click()
    },

    checkAccountDeleted: (dados) => {
        cy.allure().step("Verficar se a conta foi deletada com sucesso");
        cy
        .get(elDeletedAccount.deleteButton).click()
        .get(elDeletedAccount.confirmDeleteButton).contains(dados.messageDeleteAccount).should('exist')

    },
    LoginUser: (dados) => {
        cy.allure().step("Realizar login com usuário já cadastrado");
        cy.get(elLoginUser.elementLoginFormText).should('have.text',elLoginUser.loginFormText)
        cy.get(elLoginUser.inputLogin).click().type(dados.email)
        cy.get(elLoginUser.inputPassword).click().type(dados.emailsenha)
        cy.get(elLoginUser.loginButton).click()
        cy.get(elLoginUser.dadosUserText).should('have.text', dados.userName);  // Finds the <b> element with text "cytestes"
    },

    checkSignupLogin: () => {
        cy.allure().step("Verficar se o usuário está logado com sucesso");
        cy.get(elLoginUser.signupLoginMenu).click()
    },

    checkPasswordIncorrect: (dadosUser) => {
        cy.allure().step("Verficar se a senha está incorreta");
        cy.get(elLoginUser.elementLoginFormText).should('have.text',elLoginUser.loginFormText)
        cy.get(elLoginUser.inputLogin).click().type(dadosUser.emaillogin)
        cy.get(elLoginUser.inputPassword).click().type(dadosUser.emailsenhaWrong)
        cy.get(elLoginUser.loginButton).click()
        cy.contains(elLoginUser.passwordWrong, elLoginUser.msgpasswordWrong)
    }
}
export default registerUser;

