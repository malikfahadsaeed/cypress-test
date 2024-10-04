import HomePage from "../pageObject/HomePage"
import SearchProductPage from "../pageObject/SearchProductPage"
import helpers from "../support/helpers"
describe('adding item to cart',()=>{

    it('opening the basePage',()=>{
        HomePage.openBasePage(),
        HomePage.selectSearchCategory('Laptops')
        HomePage.searchProduct('apple')
        SearchProductPage.checkSearchValue('apple')
        //HomePage.selectCategory('Camera')
    })

    // it('selecting Cameras category',()=>{
        
    // })
})