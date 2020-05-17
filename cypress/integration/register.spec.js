/// <reference types ="cypress"/>

    it('Visit Home Page And Fill Form', () => {

        cy.visit("http://demo.automationtesting.in/Register.html");

        cy.get(':nth-child(1) > :nth-child(2) > .form-control', {timeout:6000}).type('Usuário');
        cy.get(':nth-child(1) > :nth-child(3) > .form-control').type('LastName');
        cy.get('#eid > .form-control').type('usuario@test.com');
        cy.get(':nth-child(5) > .col-md-4 > :nth-child(2)').click();
        cy.get(':nth-child(4) > .col-md-4 > .form-control').type('5558989321');
        cy.get('#countries')
          .select(['Brazil']);
        cy.get('#yearbox')
          .select(['1989']);
        cy.get(':nth-child(11) > :nth-child(3) > .form-control')
          .select(['August'])
        cy.get('#daybox')
          .select(['18']);
        cy.get('#firstpassword').type('1a23d4eA');
        cy.get('#secondpassword').type('1a23d4eA');
        cy.get('#submitbtn').click();
    })