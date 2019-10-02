/// <reference types="Cypress" />
import HomePage from "./Page_Objects/HomePage";

describe("Testing framework", () => {
  before(function() {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    // runs once before all tests in the block
    cy.fixture("example").then(data => (this.data = data));
    this.home = new HomePage();
  });

  it("first framework test", function() {
    this.home.nameControl.type(this.data.name);
    this.home.emailControl.type(this.data.email);
    this.home.passControl.type(this.data.password);
    this.home.radio1Control.check();
    this.home.selectControl.select(this.data.gender);
    this.home.radio2Control.check();
    this.home.bdayControl.type(this.data.date);

    this.home.twoWayDataBinding.should("have.value", this.data.name);
    // name must be at least two chars length
    this.home.nameControl.should("have.attr", "minlength", "2");
    // validate if radio btn Entrepreneur is disabled
    this.home.entrepRadioBtn.should("be.disabled");
  });
});
