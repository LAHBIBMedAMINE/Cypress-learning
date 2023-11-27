/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('my first test', ()=> {
    beforeEach(()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })
    it("handleFrames",()=>{
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("ul.navigation.clearfix li")

        

    })






















})