import login from '../selectors/login'
import menu from '../selectors/menu'

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

    // negative case
})