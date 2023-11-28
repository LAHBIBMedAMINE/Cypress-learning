
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


    //table 

it("manipulate tables",()=>{
    cy.get("#product").find("tr").each(($row,index,$list)=>{
        if($row.find("td").text().includes("Appium (Selenium) - Mobile Automation Testing from Scratch"))
        {
            cy.wrap($row.find("td")).eq(2).should("not.have.text","25")
            cy.wrap($row.find("td")).eq(2).should("have.text","30")

        }
    })

})

//hover a mouse cypress don't support but use jquery
it("hover over item",()=>{
    cy.get("div.mouse-hover-content").invoke("show")
    cy.contains("Top").click()
})



// no switch tabs we have to remove tartget or navigate to the url(not recommanded)
//1)
it("childTabs",()=>{
    cy.get("#opentab").invoke("removeAttr",'target').click()


})
//2) navigate to link dirctly
it.only("childTabs",()=>{
    cy.get("#opentab").invoke("prop","href").then((urlstr)=>{
        cy.visit(urlstr)
    })
})



















})