/// <reference types="Cypress" />

describe("test form controls", () => {
  beforeEach(() => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  });
  it("test checkboxes", () => {
    cy.get("#checkBoxOption1").as("check1");
    cy.get("@check1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    cy.get("@check1")
      .uncheck()
      .should("not.be.checked");
    // process all checkboxes
    cy.get('input[type="checkbox"]').check(["option2", "option3"]);
  });

  it("test static drowpdown", () => {
    cy.get("select#dropdown-class-example")
      .select("option1")
      .should("have.value", "option1");
  });

  it("test dynamic options dropdown", () => {
    cy.get("input#autocomplete").as("autocomplete");
    cy.get("@autocomplete").type("gu");
    cy.get("ul#ui-id-1 li.ui-menu-item")
      .contains(/^Guatemala$/)
      .click();
    cy.get("@autocomplete").should("have.value", "Guatemala");
  });

  it("test visible/not visible elements", () => {
    cy.get("#displayed-text").as("hide-show");
    // when load, el is shown
    cy.get("@hide-show").should("be.visible");
    // click hide button
    cy.get("input#hide-textbox").click();
    // hide-show el must be invisible
    cy.get("@hide-show").should("not.be.visible");
    // click the show button
    cy.get("input#show-textbox").click();
    cy.get("@hide-show").should("be.visible");
  });
});
