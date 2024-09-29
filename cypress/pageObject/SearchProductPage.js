class SearchProductPage{

    getSearchValue(){
       return cy.get('input[name="search"]')
    }

    checkSearchValue(value){
        const searchInput = this.getSearchValue();
        searchInput.should('have.value',value);
        cy.scrollTo('bottom');    }



}
export default new SearchProductPage()