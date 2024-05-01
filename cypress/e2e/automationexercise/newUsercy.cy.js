import {faker} from '@faker-js/faker';

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
    emaillogin : 'testescy@testes.com.br',
    emailsenha: 'cypress@#$'
}

describe('test with automation exercise ', () => {   

    // beforeEach(() => {
    //     cy.login(dados.emaillogin, dados.emailsenha);  
    // })

     it('Test Case 1: Register User', () => {
        cy.visit('https://automationexercise.com/login');
        cy.title().should('eq','Automation Exercise - Signup / Login')
        cy.get('input[type="text"]').first().click().type('cytestes')
        cy.get('input[data-qa="signup-email"]').first().click().type(dados.email)
        cy.get('button[data-qa="signup-button"]').click()  
        //ENTER ACCOUNT INFORMATION
        cy.get('#id_gender1').check({force: true}) 
        cy.get('input[id="password"]').click().type('cypress@#$')
        cy.get('[data-qa="days"]').select('28').should('have.value','28')
        cy.get('[data-qa="months"]').select('March').should('have.value','3')
        cy.get('[data-qa="years"]').select('2000').should('have.value','2000')
        cy.get('#optin').click()

        //ADDRESS INFORMATION
        cy.get('input[id="first_name"]').click().type(dados.name)
        cy.get('input[id="last_name"').click().type(dados.lastName)
        cy.get('input[id="company"]').click().type(dados.companyName)
        cy.get('[data-qa="address"]').click().type(dados.address1)
        cy.get('[data-qa="address2"]').click().type(dados.address2)
        cy.get('[data-qa="country"]').select('Australia').should('have.value','Australia')
        cy.get('[data-qa="state"]').click().type(dados.state)
        cy.get('[data-qa="city"]').click().type(dados.city)
        cy.get('[data-qa="zipcode"]').click().type(dados.zipcode)
        cy.get('[data-qa="mobile_number"]').click().type(dados.mobile)
        cy.get('[data-qa="create-account"]').click()

        //accont created
        cy.get('.col-sm-9 > :nth-child(2)').contains('Congratulations! Your new account has been successfully created!').should('exist')
        cy.get('[data-qa="continue-button"]').click()
        // account deleted
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
        cy.get('.col-sm-9 > :nth-child(2)').contains('Your account has been permanently deleted!').should('exist')
    }); 

/*     it('check if the user is already registered', () => {

        cy.visit('https://automationexercise.com/login');
        cy.title().should('eq','Automation Exercise - Signup / Login')
        cy.get('input[type="text"]').first().click().type('cytestes')
        cy.get('input[data-qa="signup-email"]').first().click().type('testescy@testes.com.br')
        cy.get('button[data-qa="signup-button"]').click()  
        cy.get('.signup-form > form > p').contains('Email Address already exist!').should('be.visible')
    }) */



  })