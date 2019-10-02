/// <reference types="Cypress" />

describe("Custom Commands", () => {
  before(function() {
    cy.fixture("example").then(data => (this.data = data));

    // runs once before all tests in the block
    // cy.fixture("example").then(data => (this.data = data));
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
  });
  beforeEach(function() {
    cy.visit("https://rahulshettyacademy.com/angularpractice/shop");
  });

  it("test using custom commands", function() {
    this.data.productName.forEach(product => {
      cy.getPhoneByName(product);
    });
   });
});
