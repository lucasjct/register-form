export class Finish
{

    password() {

        var pass = "11A2sd123"

        cy.get('#firstpassword').type(pass);

    }

    emptyPassword(){

        cy.get('#firstpassword').should('be.empty');
    }

    confirmPass ()
    {
        var pass = "11A2sd123"
        cy.get('#secondpassword').type(pass);

    }

    emptyConfirm()
    {
        cy.get('#secondpassword').should('be.empty');
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