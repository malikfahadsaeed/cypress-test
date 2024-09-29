class homePage{

openBasePage(){
    cy.visit("/")
    cy.viewport('')
    cy.get('.type-text').should('be.visible')
}

selectSearchCategory(category){
    cy.get('button[type="button"]')
    .contains('All Categories')
    .should('be.visible')
    .click()
    cy.get('a.dropdown-item').contains(category).click()
}

searchProduct(query){
    cy.get('input[name="search"]')
    .first()
    .should('be.visible')
    .type(query+'{enter}')
}

// search(){
//     cy.get()
// }


selectCategory(category){
    cy.get('a').contains('Shop by Category').should('be.visible').click()
    cy.get('span.title').contains(category).click()
    cy.get('h1').contains(category).should('be.visible')
    // , cy.get('li>a>div>span[.title]')
    // .should('have.text',' Cameras')
    // .click()

}

}
export default new homePage()
