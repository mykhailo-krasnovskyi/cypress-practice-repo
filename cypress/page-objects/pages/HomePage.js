import BasePage from "./BasePage";

class HomePage extends BasePage {

    get signInButton() {
        return cy.get('.header_signin');
    }

    clickSignInButton() {
        this.signInButton.click();
    }

    open() {
        super.open('/');
    }

}

export default new HomePage();