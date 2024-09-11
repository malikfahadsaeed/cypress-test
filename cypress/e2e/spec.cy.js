/// <reference types="cypress" />



it('my first test', () =>{
    cy.visit('/v1/')

    /* ==== Generated with Cypress Studio ==== */
    //cy.get('[data-test="new-todo"]').clear();
    //cy.get('[data-test="new-todo"]').type('Check your watch{enter}');
    /* ==== End Cypress Studio ==== */
    cy.get('#login-button').should('exist')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce{enter}')
    //cy.get('#login-button').click()
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    //cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    //cy.get('#login-button').should('be.visible')
    //console.log(cy.url);
    //cy.get('[data-test="password"]').type('secret_sauce{enter}')
})

// it.only('Second test',() => {
//     cy.visit('https://demoqa.com/checkbox')
//     //cy.get('#checkbox1').check()
//     //cy.get('#checkbox1').should('be.checked')

// })
