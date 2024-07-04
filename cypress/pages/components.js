exports.elLoginPageLocators = {
    usernameInput: 'input[type="text"]',
    emailInput: 'input[data-qa="signup-email"]',
    signupButton: 'button[data-qa="signup-button"]',
    genderId: '#id_gender1',
    passwordInput: 'input[id="password"]',
    selectDay : '[data-qa="days"]',
    selectMonth : '[data-qa="months"]',
    selectYears : '[data-qa="years"]',
    selectOption : '#optin',
    firstNameInput: 'input[id="first_name"]',
    lastNameInput: 'input[id="last_name"',
    companyInput: 'input[id="company"]',
    addressData : '[data-qa="address"]',
    addressData2 : '[data-qa="address2"]',
    countryData : '[data-qa="country"]',
    stateDate : '[data-qa="state"]',
    cityDate : '[data-qa="city"]', 
    zipcodeDate : '[data-qa="zipcode"]',
    mobilenumber : '[data-qa="mobile_number"]',
    creatAcount: '[data-qa="create-account"]'    
};

exports.elCreatAccount = {
    messageCongratulations: '.col-sm-9 > :nth-child(2)',
    continueButton: '[data-qa="continue-button"]'   
};

exports.elDeletedAccount = {
    deleteButton : '.shop-menu > .nav > :nth-child(5) > a',
    confirmDeleteButton : '.col-sm-9 > :nth-child(2)'
};

exports.elLoginUser ={
    elementLoginFormText : 'div[class="login-form"] > h2',
    loginFormText : 'Login to your account',
    inputLogin : 'input[data-qa="login-email"]',
    inputPassword : 'input[data-qa="login-password"]',
    loginButton : 'button[data-qa="login-button"]', 
    dadosUserText: 'li a b',
    signupLoginMenu: '.shop-menu > .nav > :nth-child(4) > a',
    passwordWrong: 'p',
    msgpasswordWrong: 'Your email or password is incorrect!'
};
