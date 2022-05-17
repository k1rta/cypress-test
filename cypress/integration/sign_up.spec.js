import signup from '../selectors/sign_up'
import menu from '../selectors/menu.js'

describe('Sign up', () => {

    before(() => {
        cy.visit('/register')
    })

    let username = Math.floor(Math.random() * 1000) + 'cytest';
    let email = Math.floor(Math.random() * 1000) + 'cytest@test.com';
    let password = 'Testtest1';
    
    it('successful sign up', () => {
        cy.get(signup.usernameField).type(username);
        cy.get(signup.emailField).type(email);
        cy.get(signup.passwordField).type(password);
        cy.get(signup.signUpButton).click();
        cy.get(menu.profileButton).should('be.visible');
    })
})