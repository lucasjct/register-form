const url = Cypress.config("baseUrl")
export class Register {


    visit() {

        cy.visit(url);
    }

    name(value)
    {
       cy.get(':nth-child(1) > :nth-child(2) > .form-control').type(value); 
    }
    
    emptyName(){

        cy.get(':nth-child(1) > :nth-child(2) > .form-control').should('be.empty')

    }

    secondName(value)
    {
        cy.get(':nth-child(1) > :nth-child(3) > .form-control').type(value);
    
    }

    emptySecondName(){

        cy.get(':nth-child(1) > :nth-child(3) > .form-control').should('be.empty');

    }
    email(value)
    {
        cy.get('#eid > .form-control').type(value);
    }
    emptyEmail()
    {
        cy.get('#eid > .form-control').should('be.empty');
    }

    gender()
    {
        cy.get(':nth-child(5) > .col-md-4 > :nth-child(2)').click();
    
    }


    phone(value)
    {
        cy.get(':nth-child(4) > .col-md-4 > .form-control').type(value);

    }

    emptyPhone()
    {
        cy.get(':nth-child(4) > .col-md-4 > .form-control').should('be.empty');
    }
} 