/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('/')

    })

    it('Login with correct credentials', () => {
        let userName = 'standard_user';
        let password = 'secret_sauce';

        cy.get('[data-test="username"]').type(userName);
        cy.get('[data-test="password"]').type(password);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="title"]').should('have.text', 'Products');

    });


    it('Login with locked credentials', () => {
        let userName = 'locked_out_user';
        let password = 'secret_sauce';

        cy.get('[data-test="username"]').type(userName);
        cy.get('[data-test="password"]').type(password);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
        cy.contains('Epic sadface: Sorry, this user has been locked out.').should('be.visible');
    });

    
    it('Login with incorrect credentials', () => {
        let userName = 'random';
        let password = '4124124';

        cy.get('[data-test="username"]').type(userName);
        cy.get('[data-test="password"]').type(password);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');

    });


})
