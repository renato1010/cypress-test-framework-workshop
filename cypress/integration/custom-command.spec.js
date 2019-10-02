/// <reference types="Cypress" />

describe("Custom Commands", () => {
  before(function() {
    // runs once before all tests in the block
    // cy.fixture("example").then(data => (this.data = data));
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
  });

  it("test using custom commands", function() {
    cy.get("li.nav-item a.nav-link")
      .contains("Shop")
      .click();

    cy.getPhoneByName("iphone X");
  });
});
