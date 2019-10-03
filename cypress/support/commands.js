/// <reference types="Cypress" />

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("getPhoneByName", name => {
  cy.get("h4.card-title").each($el => {
    if ($el.text().includes(name)) {
      $el
        .parents(".card.h-100")
        .find(".card-footer > button.btn")
        .click();
    }
  });
  cy.get(
    "nav.navbar .container #navbarResponsive ul li a.nav-link.btn.btn-primary"
  )
    .contains("Checkout")
    .click();
  cy.get("table.table.table-hover tbody tr")
    .contains(name)
    .parents("tr")
    .find("td:nth-of-type(2) input")
    .should("have.value", "1");
  cy.get("table.table.table-hover tbody tr:last-of-type")
    .find("td button")
    .contains("Continue Shopping")
    .click();
});

Cypress.Commands.add("addPhoneToCart", name => {
  cy.get("h4.card-title").each($el => {
    if ($el.text().includes(name)) {
      $el
        .parents(".card.h-100")
        .find(".card-footer > button.btn")
        .click();
    }
  });
});
