import login from '../selectors/login.js'
import menu from '../selectors/menu.js'

describe('Login', () => {

    before(() => {
        cy.visit('/login')
    })
    
    it('successful', () => {
        cy.get(login.emailField).type('cytest987@test.com')
        cy.get(login.passwordField).type('Testtest1')
        cy.get(login.signInButton).click()
        cy.get(menu.profileButton).should('be.visible')
    })
})