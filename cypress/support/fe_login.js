import signin from '../selectors/sign_in.js'
import menu from '../selectors/menu.js'

Cypress.Commands.add('succesfulLogin', (user) => {
    cy.visit('/login')
    cy.get(signin.emailField).type(user.email)
    cy.get(signin.passwordField).type(user.password)
    cy.get(signin.signInButton).click()
    cy.get(menu.profileButton).should('be.visible')
})