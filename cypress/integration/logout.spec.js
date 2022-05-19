import logout from '../selectors/logout'

describe('Logout', () => {

    before(() => {
        cy.feLogin({ email: '507cytest@test.com', password: 'Testtest1' })
    })

    beforeEach(() => {
        cy.visit('/settings');
    })

    it('successful', () => {
        cy.get(logout.signOutButton).click();
    })
})
