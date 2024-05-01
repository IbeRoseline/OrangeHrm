
import Homepage from "../PageObjectModel/OrangeHrm_POM.js";

describe('Login page testing', ()=> {
 beforeEach(()=> {
  cy.visit('https://opensource-demo.orangehrmlive.com/')
 })

 afterEach(()=>{
    cy.wait(2000)
 })

// it('testing for null values', ()=> {
// // cy.get('.oxd-button').click()
// const ln=new Homepage();
// this.LoginButton.click();
// })


it('testing a valid username and invalid password', ()=> {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('chik')
    cy.get('.oxd-button').click()
})

it.only('testing a valid username and password', ()=> {
    // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    // cy.get('.oxd-button').click()

    Homepage.OrangeHRM
    Homepage.Login
    Homepage.UsernameInput
    Homepage.PasswordInput
    Homepage.LoginButton
    fillForm(username, password) 
    {
        this.UsernameInput.type("Admin");
        this.PasswordInput.type("admin123");
    }



})



})