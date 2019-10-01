/// <reference types="Cypress" />

describe("test form controls", () => {
  beforeEach(() => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  });

  it("test alerts", () => {
    cy.on("window:alert", str => {
      expect(str).equal(
        "Hello , share this practice page and share your knowledge"
      );
    });
    cy.on("window:confirm", str => {
      expect(str).equal("Hello , Are you sure you want to confirm?");
    });
    cy.get("input#alertbtn").click();
    cy.get("input#confirmbtn").click();
  });

  it("test links to target _blank", () => {
    // get <a> element and remove attribute target first
    cy.get("#opentab")
      .invoke("removeAttr", "target")
      .click();
    // get the current url
    cy.url().should("include", "qaclickacademy");
    cy.go("back");
  });
});
