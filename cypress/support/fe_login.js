import login from '../selectors/login.js'
import menu from '../selectors/menu.js'

Cypress.Commands.add('succesfulLogin', (user) => {
    cy.visit('/login')
    cy.get(login.emailField).type(user.email)
    cy.get(login.passwordField).type(user.password)
    cy.get(login.signInButton).click()
    cy.get(menu.profileButton).should('be.visible')
})