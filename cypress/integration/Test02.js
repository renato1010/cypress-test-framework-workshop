/// <reference types="Cypress" />

describe("My Second Test Suite", () => {
  it("test case", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('input[type="search"].search-keyword').type("ca");
    cy.wait(2000);
    cy.get(".products").as("products");
    cy.get("@products")
      .find(".product")
      .each($el => {
        const prodText = $el.find("h4.product-name").text();
        if (prodText.includes("Cashews")) {
          $el.find("button").click();
        }
      });
    cy.get(".cart-icon > img").click();
    cy.get(".cart-preview.active")
      .find(".action-block button")
      .contains("PROCEED TO CHECKOUT")
      .click();
    cy.contains("Place Order").click();
  });
});
