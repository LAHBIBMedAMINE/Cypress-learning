
/// <reference types="cypress" />


describe('my first test', ()=> {
    beforeEach(()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

    })



    it('search for cashews',()=>{
        
        cy.get("input.search-keyword").type("ca")
        cy.get("button.search-button").click()
        cy.wait(2000)
        cy.get("div.products").find("div.product").find("h4.product-name")
            .each(($productName,index,$list)=>{
                cy.log($productName.text())
              if($productName.text().includes("Cashews")){
                cy.get("div.products").find("div.product").eq(index)
                    .find("button")
                    .contains("ADD TO CART")
                    .click()
              } 
                })

        cy.get('.brand').then(function(constName){
            cy.log(constName.text())
        })
        cy.get('.brand').should("have.text","GREENKART")
            
        cy.get("a.cart-icon").click()
        cy.get("button").contains("PROCEED TO CHECKOUT").click()
        cy.get("button").contains("Place Order").click()
        cy.get('select').select("Tunisia")
        cy.get('.chkAgree').check()
        cy.get('button').click()

    })

    it('search for pruduct',()=>{
        
        cy.get("input.search-keyword").type("ca")
        cy.get("button.search-button").click()
        cy.get("div.products").find("div.product").should("have.length",4)
        cy.get("div.products").find("div.product").eq(2)
            .find("button")
            .contains("ADD TO CART")
            .click()
            
        cy.get("a.cart-icon").click()
        cy.get("button").contains("PROCEED TO CHECKOUT").click()
        cy.get("button").contains("Place Order").click()
        cy.get('select').select("Tunisia")
        cy.get('.chkAgree').check()
        cy.get('button').click()

        
    })
})
