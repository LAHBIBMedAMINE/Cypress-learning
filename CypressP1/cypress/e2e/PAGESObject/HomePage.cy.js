class HomePage
{

NameTxBxLocator(){
    return cy.get("input[name='name']:nth-child(2)")
}


genderSelecLocator(){
    return cy.get('select')
}









}
export default HomePage