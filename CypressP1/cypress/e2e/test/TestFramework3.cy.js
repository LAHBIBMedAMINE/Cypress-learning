/// <reference types="cypress" />
import HomePage from "../PAGESObject/HomePage.cy"


describe('my first test', function() {

    const HomePgObj = new HomePage()
    before(function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.fixture("example").then(function(data){
            this.data=data
            cy.log(data.name)
        })
    })

    it("fill the form", function(){
        HomePgObj.NameTxBxLocator().type("bob")
        HomePgObj.genderSelecLocator().select("Male")
    })

})
