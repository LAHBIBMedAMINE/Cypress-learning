// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("search_and_addtocart",(productName)=>{
    let flag=false
    
    cy.get("div.col-lg-9").find("div.card.h-100")
    .each(($product,index,$list)=>{
        if($product.find("a").text().includes(productName))
        {
        cy.wrap($product.find("button.btn.btn-info")).click().then(() => {
            flag=true
            cy.log("i find **"+$product.find("a").text()+"**" )
            
          });
        }
    }).then(()=>{if(!flag){cy.log("i can't find **"+productName+"**" )}})
    

})
