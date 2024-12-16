/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('/');

    })

    it('click', () => {
        cy.get('.header_signin').click({ force: true })
    });

    it('type', () => {
        cy.get('.header_signin').click({ force: true });
        cy.get('#signinEmail').type('12345678910');
        cy.get('#signinPassword').type('12345678910', { delay: 100 });
    });


    it('clear', () => {
        cy.get('.header_signin').click({ force: true });
        cy.get('#signinEmail').type('12345678910');
        cy.get('#signinEmail').clear();
        cy.get('#signinEmail').type('12345678910', { delay: 100 });
    });

    it('focus + blur', () => {
        cy.get('.header_signin').click({ force: true });
        cy.get('#signinEmail').focus();
        cy.wait(5000);
        cy.get('#signinEmail').type('{}')
    });

    it('Multiple tabs', () => {
        cy.get('.icon-youtube').parent().invoke('removeAttr', 'target').click();
        cy.contains('Hillel IT School').should('be.visible');
    });
    it.only('Table - verify number of columns', () => {
        cy.visit('http://127.0.0.1:5500/cypress/e2e/3-practice-qauto/index.html');
        cy.get('table th').should('have.length', 4);

    });

    it.only('Table - verify number rows', () => {
        cy.visit('http://127.0.0.1:5500/cypress/e2e/3-practice-qauto/index.html');
        cy.get('table tr').should('have.length', 6);

    });


    it.only('Table - verify number rows', () => {
        cy.visit('http://127.0.0.1:5500/cypress/e2e/3-practice-qauto/index.html');
        cy.get('table tr').eq(2).find('td').eq(2).should('have.text', 'Row 2 Data 3');

    });



})


describe('Inner tests', () => {

    let countries = [];
    beforeEach(() => {

    })

    it('dropdowns', () => {
        cy.get('#country').select(5);
        cy.get('#country').select('Ukraine');

    });


    it('custom dropdown', () => {
        cy.visit('http://127.0.0.1:5500/cypress/e2e/3-practice-qauto/index.html');
        cy.get('#customDropdown').click();
        cy.contains('Опція 2').click();
    });


    it('extra case', () => {
        cy.get('#country option').each((option, index) => {
            if (index < 50) {
                cy.wrap(option).invoke('text').then((text) => {
                    countries.push(text);
                })
            }
        }).then(() => {
            cy.log(countries.toString());
        })

    });


    it('checkboxes', () => {
        cy.visit('https://practice.expandtesting.com/checkboxes')
        cy.get('#checkbox1').check();
        cy.get('#checkbox2').uncheck();

        cy.get('#checkbox1').should('be.checked');
        cy.get('#checkbox2').should('not.be.checked');
        cy.get('#checkbox1').uncheck();
        cy.get('input').check();
        cy.get('#checkbox1').should('be.checked');
        cy.get('#checkbox2').should('be.checked');

    });
    it('radio buttons', () => {
        cy.visit('https://practice.expandtesting.com/radio-buttons')
        cy.get('input[type=radio]').check('red');
        cy.get().
            cy.get('#red').should('be.checked');
        cy.get('input[type=radio]').check('yellow');
        cy.get('#red').should('not.be.checked');

    });


})