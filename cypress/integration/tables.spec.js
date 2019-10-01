/// <reference types="Cypress" />

describe("test form controls", () => {
  beforeEach(() => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  });

  it("test tables, 8th row price must be 25", () => {
    cy.get("table#product")
      .find("tbody tr")
      .contains("Master Selenium Automation in simple Python Language")
      .as("col");

    cy.get("@col")
      .parent()
      .find("td:nth-of-type(3)")
      .should("have.text", "25");
  });

});
