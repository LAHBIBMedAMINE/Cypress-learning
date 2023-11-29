/// <reference types="cypress" />
import HomePage from "../PAGESObject/HomePage.cy"


describe('my first test', function() {

    const HomePgObj = new HomePage()
    before(function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/shop")
    })

    it("fill the form", function(){
        cy.search_and_addtocart("Nokia")
        cy.search_and_addtocart("Note")
        cy.get(".nav-link.btn.btn-primary").click()
        var sum=0

        cy.get('tr td:nth-child(4)  strong').each(($el,index,$list)=>
        {
            var pricetag= $el.text().split(" ")[1].trim()
            sum = sum + parseFloat(pricetag)
            
        }).then(function(){cy.log("your total is ="+ sum)})
       
        cy.get('h3 > strong').invoke("text").then((total)=>{
            var pricetag=parseFloat(total.split(" ")[1].trim())
            expect(pricetag==parseFloat(sum)).to.be.true
            
        })
        
    })

})
