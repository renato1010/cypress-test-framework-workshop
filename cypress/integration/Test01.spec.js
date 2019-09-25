/// <reference types="Cypress" />

describe("First test", () => {
  it("Does not do much", () => {
    expect(true).to.equal(false);
  });

  it("Go to website", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/");
  });
});
