import article from '../selectors/article'

describe('Article', () => {

    let generateRandomText = Math.random().toString(36).slice(2, 7);
      
    before(() => {
        cy.feLogin({ email: '507cytest@test.com', password: 'Testtest1' })
    })

    beforeEach(() => {
        cy.visit('/editor/')
    })
    
    it('successful', () => {
        cy.get(article.titleField).type(generateRandomText + 'title');
        cy.get(article.aboutField).type(generateRandomText + 'about');
        cy.get(article.textField).type(generateRandomText + 'text');
        cy.get(article.tagsField).type(generateRandomText + 'tags');
        cy.get(article.publishButton).click();
    })

    // negative case
})
