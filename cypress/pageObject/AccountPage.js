import { faker } from "@faker-js/faker";
import userData, { generateUserData } from "../fixtures/userData"
class AccountPage{
    
    openAccountPage(){
        cy.visit('/index.php?route=account/login'),
        cy.get('h2').contains('New Customer').should('be.visible')
    }

    openRegisterAccountPage(){
        this.openAccountPage(),
        cy.get('.list-group > [href="https://ecommerce-playground.lambdatest.io/index.php?route=account/register"]').click()
        cy.get('.page-title').contains('Register Account').should('be.visible')
    }

    openForgotPasswordPage(){
        this.openAccountPage(),
        cy.get('.list-group > [href="https://ecommerce-playground.lambdatest.io/index.php?route=account/forgotten"]').click()
        cy.get('.page-title').contains('Forgot Your Password?').should('be.visible')
    }

    openLoginPage(){
        cy.get('li>a[data-toggle="dropdown"]>div>span').contains('My account').trigger('mouseover')
        //.wait(60000)//.trigger('mouseout')
        cy.get('li>a>div>span').contains('Login').click()
        cy.get('h2').contains('Returning Customer').should('be.visible')
    }

    registerAccout(data){
        this.openRegisterAccountPage()
        cy.get('#input-firstname').type(data.firstName),
        cy.get('#input-lastname').type(data.lastName),
        cy.get('#input-email').type(data.email),
        cy.get('#input-telephone').type(data.phone),
        cy.get('#input-password').type(data.password),
        cy.get('#input-confirm').type(data.password)
        cy.get('.float-right').click(),
        cy.get('.float-right > .btn').click()
        cy.get('.page-title').contains('Your Account Has Been Created!').should('be.visible')
        cy.get('.buttons > .btn').contains('Continue').click()
        cy.get('h2').contains('My Account').should('be.visible')
    }

    userLogin(data){
        this.openLoginPage(),
        cy.get('#input-email').type(data.email)
        cy.get('#input-password').type(data.password)
        cy.get('form > .btn').click()
    }

    userLogout(){
        cy.get('li>a[data-toggle="dropdown"]>div>span').contains('My account').trigger('mouseover')
        //.wait(60000)//.trigger('mouseout')
        cy.get('li>a>div>span').contains('Logout').click()
        cy.get('.page-title').contains('Account Logout').should('be.visible')
    }

    forgotPassword(data){
        this.openAccountPage()
        this.openForgotPasswordPage()
        cy.get('#input-email').type(data.email)
        cy.get('.float-right > .btn').contains('Continue').click()
        cy.get('#account-login > .alert').contains(' An email with a confirmation link has been sent your email address.')
    }
}
export default new AccountPage()