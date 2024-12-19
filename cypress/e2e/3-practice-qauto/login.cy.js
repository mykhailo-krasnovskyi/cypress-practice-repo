/// <reference types="cypress" />
import HomePage from "../../page-objects/pages/HomePage";
import SignInForm from "../../page-objects/forms/SignInForm";

describe.skip('Login form without POM', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('.header_signin').click();
    });

    it('Success Sign in', () => {
        cy.get('#signinEmail').type('michael.krasnovskyi+testUser1@gmail.com');
        cy.get('#signinPassword').type('ZSgeVQhuU3qkvlG');
        cy.get('.modal-footer .btn-primary').click();
        cy.get('h1').should('have.text', 'Garage');
        cy.url().should('contain', '/garage');
    })

    it('Login button is disabled without email', () => {
        cy.get('#signinPassword').type('ZSgeVQhuU3qkvlG');
        cy.get('.modal-footer .btn-primary').should('be.disabled');
    })

    it('Login button is disabled without password', () => {
        cy.get('#signinEmail').type('michael.krasnovskyi+testUser1@gmail.com');
        cy.get('.modal-footer .btn-primary').should('be.disabled');
    })

    it('Sign in with wrong credentials', () => {
        cy.get('#signinEmail').type('michael.krasnovskyi+testUser1@gmail.com');
        cy.get('#signinPassword').type('12341124142');
        cy.get('.modal-footer .btn-primary').click();
        cy.get('.alert-danger').should('have.text', 'Wrong email or password');
    })

    it('Error message is displayed with empty password', () => {
        cy.get('#signinEmail').type('michael.krasnovskyi+testUser1@gmail.com');
        cy.get('#signinPassword').focus();
        cy.get('#signinPassword').blur();
        cy.get('.invalid-feedback p').should('have.text', 'Password required');
    })

    it('Error message is displayed with empty email', () => {
        cy.get('#signinEmail').focus();
        cy.get('#signinEmail').blur();
        cy.get('#signinPassword').type('12341124142');
        cy.get('.invalid-feedback p').should('have.text', 'Email required');
    })
})


describe('Login form with POM', () => {
    beforeEach(() => {
        HomePage.open();
        HomePage.clickSignInButton();
        debugger;
    });

    it('Success Sign in', () => {
        SignInForm.enterEmail('michael.krasnovskyi+testUser1@gmail.com');
        SignInForm.enterPassword('ZSgeVQhuU3qkvlG');
        SignInForm.submitForm();

        cy.get('h1').should('have.text', 'Garage');
        cy.url().should('contain', '/garage');
    })

    it('Success Sign in with custom command', () => {
        cy.login(Cypress.env('MAIN_USER_EMAIL'),Cypress.env('MAIN_USER_PASSWORD') );
        
        cy.get('h1').should('have.text', 'Garage');
        cy.url().should('contain', '/garage');
    })

    it('Login button is disabled without email', () => {
        SignInForm.enterPassword('ZSgeVQhuU3qkvlG');
        SignInForm.loginButton.should('be.disabled');
    })

    it('Login button is disabled without password', () => {
        SignInForm.enterEmail('michael.krasnovskyi+testUser1@gmail.com');
        SignInForm.loginButton.should('be.disabled');
    })

    it('Sign in with wrong credentials', () => {
        SignInForm.enterEmail('michael.krasnovskyi+testUser1@gmail.com');
        SignInForm.enterPassword('123414141');
        SignInForm.submitForm();
        SignInForm.wrongCredsErrorMessage.should('be.visible');
    })

    it('Error message is displayed with empty password', () => {
        SignInForm.enterEmail('michael.krasnovskyi+testUser1@gmail.com');
        SignInForm.triggerEmptyErrorMessageByField('password');
        SignInForm.verifyFieldErrorByText('Password required');
    })

    it('Error message is displayed with empty email', () => {
        SignInForm.triggerEmptyErrorMessageByField('email');
        SignInForm.enterPassword('123414141');
        SignInForm.verifyFieldErrorByText('Email required');
    })
})