/// <reference types="Cypress" />

describe("Testing framework", () => {
  before(function() {
    // runs once before all tests in the block
    cy.fixture("example").then(data => (this.data = data));
  });

  it("first framework test", function() {
    cy.log("data: ", this.data);
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get('input[name="name"].form-control').type(this.data.name);
    cy.get('input[name="email"].form-control').type(this.data.email);
    cy.get('input[type="password"].form-control').type(this.data.password);
    cy.get("input#exampleCheck1").check();
    cy.get("select#exampleFormControlSelect1").select(this.data.gender);
    cy.get("input#inlineRadio2").check();
    cy.get('input[name="bday"]').type(this.data.date);

    cy.get('h4 > input[name="name"]').should("have.value", this.data.name);
    // name must be at least two chars length
    cy.get('input[name="name"].form-control').should(
      "have.attr",
      "minlength",
      "2"
    );
    // validate if radio btn Entrepreneur is disabled
    cy.get("input#inlineRadio3").should("be.disabled");
  });
});
