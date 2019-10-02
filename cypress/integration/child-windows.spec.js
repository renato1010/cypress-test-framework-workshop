/// <reference types="Cypress" />

describe("test form controls", () => {
  beforeEach(() => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  });

  it("test on spawn windows", () => {
    // take the href url
    let href;
    cy.get("a#opentab").then($el => {
      href = $el.attr("href");
      console.log("href: ", href);
    });
    // dont work cypress doesnt allow visit two domains
    cy.visit(href);
  });
});
