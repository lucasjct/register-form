export class Finish
{

    password(value) {

        cy.get('#firstpassword').type(value);

    }

    confirmPass (value)
    {
        cy.get('#secondpassword').type(value);

    }

    submit()
    {
        cy.get('#submitbtn').click();

    }

    refresh()
    {
        cy.get('#Button1').click();
    }
}