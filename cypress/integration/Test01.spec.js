/// <reference types="Cypress" />

describe("First test", () => {
  // it("Does not do much", () => {
  //   expect(true).to.equal(false);
  // });

  it("Go to website", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/");
    cy.get('input[type="search"].search-keyword').type("ca");
    cy.wait(2000);
    // cy.get(".products > .product:visible").should("have.length", 4);
    // parent child chaining
    // const products = cy.get(".products").find(".product");
    cy.get(".products").then($products => {
      expect($products.find(".product").length).to.equal(4);
      $products.find(".product").each((i, el) => {
        cy.wrap(el)
          .find("h4.product-name")
          .then($t => {
            if ($t.text().includes("Carrot - 1 Kg")) {
              el.querySelector(".product-action button").click();
            }
          });
      });
      cy.get(".cart-info table tbody tr:first > td:nth-of-type(3)").as(
        "cartCounter"
      );

      cy.get("@cartCounter").should("contain", "1");
      cy.get(".cart-info table tbody tr:nth-of-type(2)").as("total");
      cy.get("@total")
        .find("td:nth-of-type(3) strong")
        .should("contain", "56");
    });
    // products.should("have.length", 4);
    // get logo text
    cy.get(".brand.greenLogo").as("logo");
    cy.get("@logo").then($el => {
      expect($el.text().toLowerCase()).to.includes("greenkart");
    });
    cy.get("@logo").should("have.text", "GREENKART");
  });
});
