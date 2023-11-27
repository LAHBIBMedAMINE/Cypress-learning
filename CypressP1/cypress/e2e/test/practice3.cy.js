
/// <reference types="cypress" />


describe('my first test', ()=> {
    beforeEach(()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })
// capture alert after firing it
    it("popup",()=>{
        cy.get("#alertbtn").click()
        cy.on("window:alert",(str)=>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        
        

    })
// capturing confir after firing it
    it("alert&confirm",()=>{
        cy.get("#confirmbtn").click()
        cy.on("window:confirm",(str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        

    })

// switch tabs
it.only("childTabs",()=>{
    cy.get("#opentab").invoke("removeAttr",'target').click()
    // get back
    cy.go('back')

})

















})