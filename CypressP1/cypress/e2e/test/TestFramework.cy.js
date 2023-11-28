/// <reference types="cypress" />


describe('my first test', function() {
    before(function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.fixture("example").then(function(data){
            this.data=data
            cy.log(data.name)
        })
        cy.fixture("productNames").then(function(productlist){
            this.productlist=productlist
            cy.log(productlist.products)
        })

    })

    it("form",function(){
        cy.get("input[name='name']:nth-child(2)").type(this.data.name)
        cy.get('select').select(this.data.gender)
        cy.get("input[name='name']:nth-child(1)").should("have.value",this.data.name)
        cy.get("input[name='name']:nth-child(2)").should("have.attr",'minlength',2)
        cy.get('#inlineRadio3').should("be.disabled")

    })

    it("add_tocart",function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/shop")
        cy.get("div.col-lg-9").find("div.card.h-100").each(($product,index,$list)=>{
            if($product.find("a").text().includes("Nokia")){
            cy.wrap($product.find("button.btn.btn-info")).click()
        }
        })
        // costumize the search and adding to cart into cypress.command
        cy.search_and_addtocart("Black")
        cy.search_and_addtocart("blee")
        cy.search_and_addtocart("Note")

        this.productlist.products.forEach((element)=>{
            cy.search_and_addtocart(element)

        })
    })
    it.only("add_tocart aproductlist",function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/shop")

        this.productlist.products.forEach((element)=>{
            cy.search_and_addtocart(element)

        })
    })



    })





















