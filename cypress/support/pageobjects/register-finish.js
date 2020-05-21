export class Finish
{

    password() {

        var pass = "11A2sd123"

        cy.get('#firstpassword').type(pass);

    }

    confirmPass ()
    {
        var pass = "11A2sd123"
        cy.get('#secondpassword').type(pass);

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