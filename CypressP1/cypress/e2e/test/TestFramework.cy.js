/// <reference types="cypress" />

describe('my first test', function() {
    let data
    let productlist
    before(()=>{
        
        cy.visit(Cypress.env("url"))
        cy.fixture('example').then((c) => {
            data = c
          })
          cy.fixture('productNames').then((c) => {
            productlist = c
          })

    })
    it("add_tocart",function(){
        cy.visit(Cypress.env("url")+"/shop")
        cy.get("div.col-lg-9").find("div.card.h-100").each(($product,index,$list)=>{
            if($product.find("a").text().includes("Nokia")){
            cy.wrap($product.find("button.btn.btn-info")).click()
        }
        })
        // costumize the search and adding to cart into cypress.command
        cy.search_and_addtocart("Black")
        cy.search_and_addtocart("blee")
        cy.search_and_addtocart("Note")

        productlist.products.forEach((element)=>{
            cy.search_and_addtocart(element)
        })
    })

    it("form",function(){
        cy.visit(Cypress.env("url"))
        cy.get("input[name='name']:nth-child(2)").type(data.name)
        cy.get('select').select(data.gender)
        cy.get("input[name='name']:nth-child(1)").should("have.value",data.name)
        cy.get("input[name='name']:nth-child(2)").should("have.attr",'minlength',2)
        cy.get('#inlineRadio3').should("be.disabled")

    })

    
    it("add_tocart aproductlist",function(){
        cy.visit(Cypress.env("url")+"/shop")

        productlist.products.forEach((element)=>{
            cy.search_and_addtocart(element)

        })
    })

    it("add_tocartand checkout",function(){
        cy.visit(Cypress.env("url")+"/shop")

        productlist.products.forEach((element)=>{
            cy.search_and_addtocart(element)

        })
    })



    })





















