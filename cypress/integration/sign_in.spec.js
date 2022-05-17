import signin from '../selectors/sign_in.js'
import menu from '../selectors/menu.js'

describe('Sign in', () => {

    before(() => {
        cy.visit('/login')
    })
    
    it('successful sign in', () => {
        cy.get(signin.emailField).type('cytest987@test.com')
        cy.get(signin.passwordField).type('Testtest1')
        cy.get(signin.signInButton).click()
        cy.get(menu.profileButton).should('be.visible')
    })
})