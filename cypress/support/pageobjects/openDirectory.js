const domain = Cypress.config('baseUrl');

export class AddFile {

    visit() {

        cy.visit(domain);
    }

    openIndex()
    {
        cy.get('#imagesrc').click();
    }

    localDirectory()
    {
        cy.screenshot();
    }
}