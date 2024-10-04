import AccountPage from "../pageObject/AccountPage"
import { generateUserData } from "../fixtures/userData"
describe('user registers for the first time',()=>{
    let data = generateUserData();
    it('user opens account page',()=>{
        AccountPage.registerAccout(data)
        AccountPage.userLogout()
        AccountPage.userLogin(data)
    })

})