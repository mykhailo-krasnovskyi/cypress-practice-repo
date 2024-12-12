


/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('https://qauto.forstudy.space', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        })

    })

    // .header .container
    it('find', () => {
        cy.get('.header').find('.container');
    });

    // .header>.container

    it('children', () => {
        cy.get('app-home').children('section');
    });

    it('parent', () => {
        cy.get('.contacts_socials').parent();
    });

    it('parents', () => {
        cy.get('.contacts_socials').parents('#contactsSection');
    });

    it('prev', () => {
        cy.get('.contacts_socials').siblings();
    });

    it('siblings', () => {
        cy.get('.icon-youtube').parent().siblings();
    });

    it('title', () => {
        cy.title().should('contain', 'Hillel');

    });

    //[href="https://t.me/ithillel_kyiv"]
    it('filter', () => {
        cy.get('.icon-youtube').parent().siblings().filter('[href="https://t.me/ithillel_kyiv"]');
    });

    it('.contains in get', () => {
        //        cy.get('#contactsSection').contains('Contacts');
        cy.contains('h2', 'Contacts');

    });

    it('by index', () => {
        cy.get('.socials_icon').eq(2);
    });


    it('not', () => {
        cy.get('.contacts_socials a').not('[href="https://t.me/ithillel_kyiv"]');

    });


    it('first', () => {
        cy.get('.socials_icon').first();
    });


    it('last', () => {
        cy.get('.socials_icon').last();
    });

    it('alias', () => {
        cy.contains('Sign In').as('signInButton');
        cy.get('@signInButton').click();

    });

    it('invoke', () => {
        cy.contains('Sign In').invoke('text').should('eq', 'Sign In');
        cy.contains('Sign In').invoke('hide');
        cy.wait(3000);
        cy.contains('Sign In').invoke('show');
        cy.wait(3000);
        cy.contains('Sign In').invoke('attr', 'class').should('contain', 'header_signin');
    });


    it('cy.log', () => {
        const message = 'Hello';
        cy.log(message);
    });


    // it.only('then', () => {
    //     cy.get('h1').invoke('text').then((text) => {
    //        cy.contains(text).should('be.visible');
    //     })

    // });

    it('wrap', () => {
        // const message = 'Hello';
        const array = [10, 20, 30];
        cy.wrap(array).should('have.length', 3);
    });

    it.only('its', () => {
        // cy.title().its('length').should('be.greaterThan', 5);

        const obj1 = {
            name: 'John',
            age: 23,
            country: 'Ukraine'
        }

        cy.wrap(obj1).its('name').should('eq', 'John')
    });


    it('each', () => {
        cy.contains('Sign up').click();
        cy.get('input').each((el, index) => {
            cy.wrap(el).type('Test' + index);
        })
    });

    it.only('each', () => {
        cy.contains('Sign up').click();
        cy.get('.modal-content').within(() => {
            cy.get('button').eq(1).should('be.disabled');
        });



    })
})
