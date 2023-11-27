/// <reference types="cypress" />
describe("practices",()=>{
    beforeEach(()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })




    it('checkBox',()=>{
        // check box
        cy.get("#checkBoxOption1").check().should("be.checked")
        // uncheck box
        cy.get("#checkBoxOption1").uncheck().should("not.be.checked")

        // loop through check boxes

        cy.get("#checkbox-example").find("input")
            .each(($checkbox,index,$list)=>{
                cy.wrap($checkbox).check().should("be.checked")
            })
        cy.get("#checkbox-example").find("input")
            .each(($checkbox,index,$list)=>{
                cy.wrap($checkbox).uncheck().should("not.be.checked")
            })
            // select multiple checkbox without loop
            cy.get("#checkbox-example").find("input").check(["option1","option2"]).should("be.checked")
    })

    //select option from drop down list static
    it("selection",()=>{
        cy.get("#dropdown-class-example").select("option1").should("have.value","option1")
        cy.get("#dropdown-class-example").select("option2").should("have.value","option2")
        cy.get("#dropdown-class-example").select("option3").should("have.value","option3")
    })

    //select option from drop down list dynamic
    it("selection",()=>{
        cy.get("#autocomplete").type("Tu")
        cy.get("#ui-id-1").find(".ui-menu-item div").each(($sugg,index,$list)=>{
            if($sugg.text()=="Tunisia"){cy.wrap($sugg).click()}  
        })
        cy.get("#autocomplete").should("have.value","Tunisia")
    })

    // check a radio box and verify that all other all not selected 
    it("radio-btn-example",()=>{
        cy.get("#radio-btn-example").find("input.radioButton")
            .each(($Rdbtn,index,$list)=>{
                cy.wrap($Rdbtn).check().should("be.checked")
                cy.get("#radio-btn-example").find("input.radioButton").each(($otherRdbtn, otherIndex) => {
                    if (otherIndex !== index) {
                      cy.wrap($otherRdbtn).should("not.be.checked");
                    }
            })
        
    })
})

it.only(("visible & invisible Itmes"),()=>{
    
    cy.get("#displayed-text").then(($element) => {
        if ($element.is(":visible")) {
        // hide it
        cy.get("#hide-textbox").click()
        cy.get("#displayed-text").should("not.be.visible")
        // show it
        cy.get("#show-textbox").click()
        cy.get("#displayed-text").should("be.visible")
        } else {
            //show it
            cy.get("#show-textbox").click()
            cy.get("#displayed-text").should("be.visible")
            // hide it
            cy.get("#hide-textbox").click()
            cy.get("#displayed-text").should("not.be.visible")
        }
      });
      });
    
    
    
    
    
    




})