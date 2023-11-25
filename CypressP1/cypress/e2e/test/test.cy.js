
/// <reference types="cypress" />


describe('my first test', ()=> {
    beforeEach(()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

    })



    it('search for pruduct',()=>{
        
        cy.get("input.search-keyword").type("ca")
        cy.get("button.search-button").click()
        cy.get("div.products").find("div.product").should("have.length",4)   
    })
})