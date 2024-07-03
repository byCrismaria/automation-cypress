import { faker } from '@faker-js/faker';
import registerUser from '../../pages/newUser'


const dados = {
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    companyName: faker.company.name(),
    address1: faker.address.streetAddress(),
    address2: faker.address.secondaryAddress(),
    country: faker.address.country(),
    state: faker.address.state(),
    city: faker.address.city(),
    zipcode: faker.address.zipCode(),
    mobile: faker.phone.number(),
    email: faker.internet.email(),
    emaillogin: 'testescy@testes.com.br',
    emailsenha: 'cypress@#$',
    day: '28',
    month: 'March',
    year: '2000',
    country: 'Australia',
    messageCongratulations: 'Congratulations! Your new account has been successfully created!',
    messageDeleteAccount: 'Your account has been permanently deleted!',
    userName: 'cytestes'
}

describe('test with automation exercise ', () => {

    // beforeEach(() => {
    //     cy.login(dados.emaillogin, dados.emailsenha);  
    // })

    it('Test Case 1: Register User', () => {
        registerUser.go()
        registerUser.userRegister(dados)
        registerUser.checkAccountCreated(dados)
        registerUser.checkAccountDeleted(dados)
    });

   /*  it('check if the user is already registered', () => {

        cy.visit('https://automationexercise.com/login');
        cy.title().should('eq', 'Automation Exercise - Signup / Login')
        cy.get('input[type="text"]').first().click().type('cytestes')
        cy.get('input[data-qa="signup-email"]').first().click().type('testescy@testes.com.br')
        cy.get('button[data-qa="signup-button"]').click()
        cy.get('.signup-form > form > p').contains('Email Address already exist!').should('be.visible')
    }) */

    it('Test Case 2: Login User with correct email and password', () => {
        registerUser.go()
        registerUser.userRegister(dados)
        registerUser.checkAccountCreated(dados)
        registerUser.checkSignupLogin()
        registerUser.go()
        registerUser.LoginUser(dados)
        registerUser.checkAccountDeleted(dados)
    })



})