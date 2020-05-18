export class BoxForm
{

    countries()
    {
        cy.get('#countries')
        .select(['Brazil'])
    }

    year()
    {
        cy.get('#yearbox')
        .select(['1989'])
    }

    month()
    {
        cy.get(':nth-child(11) > :nth-child(3) > .form-control')
        .select(['August'])

    }

    day()
    {

        cy.get('#daybox')
        .select(['18']);

    }

}