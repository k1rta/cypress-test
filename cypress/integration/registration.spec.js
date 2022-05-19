import registration from '../selectors/registration'
import menu from '../selectors/menu'

describe('Registration', () => {

    before(() => {
        cy.visit('/register')
    })

    let username = Math.floor(Math.random() * 1000) + 'cytest';
    let email = Math.floor(Math.random() * 1000) + 'cytest@test.com';
    let password = 'Testtest1';
    
    it('successful', () => {
        cy.get(registration.usernameField).type(username);
        cy.get(registration.emailField).type(email);
        cy.get(registration.passwordField).type(password);
        cy.get(registration.signUpButton).click();
        cy.get(menu.profileButton).should('be.visible');
    })
})