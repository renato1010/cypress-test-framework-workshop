/// <reference types="Cypress" />

describe("test form controls", () => {
  beforeEach(() => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  });

  it("test on hover event", () => {
    cy.get("button#mousehover")
      .parent()
      .as("parent");
    cy.get("@parent")
      .find(".mouse-hover-content")
      .invoke("show");
    cy.get("@parent")
      .find(".mouse-hover-content")
      .should("be.visible");
  });
});
