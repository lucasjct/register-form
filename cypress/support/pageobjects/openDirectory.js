const domain = Cypress.config('baseUrl');

export class AddFile {

    visit() {

        cy.visit(domain);
    }

    openIndex()
    {
        cy.get('#imagesrc').click();
        cy.wait(3000);
    }

    localDirectory()
    {
        cy.screenshot();
    }
}