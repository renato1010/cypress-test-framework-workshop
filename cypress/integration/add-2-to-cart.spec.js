/// <reference types="Cypress" />

import ShopPage from "../support/Page_Objects/ShopPage";

describe("add two phones from data(fixtures)", () => {
  before(function() {
    cy.visit(Cypress.env("ngPractice"));
    // get data from fixtures
    cy.fixture("example").then(data => (this.data = data));
    this.shopPage = new ShopPage();
  });

  it("total of two phones chart equal to last row grand total", function() {
    let amount = 0;
    // got to Shop page
    this.shopPage.shopNavTab.click();
    this.data.productName.forEach(productName =>
      cy.addPhoneToCart(productName)
    );
    this.shopPage.checkOutBtn.click();

    // get the product rows slice table remove last 2 rows
    this.shopPage.allTableRows.then(rows => {
      rows = rows.slice(0, rows.length - 2);
      rows.each((i, el) => {
        let total =
          el.querySelector("td:nth-child(4) strong") &&
          el.querySelector("td:nth-child(4) strong").innerText;
        total = parseFloat(total.replace(/\.|₹/g, "").trim());
        amount += total;
      });
    });
    this.shopPage.allTableRows.then(rows => {
      const row = rows[rows.length - 2];
      let grandTotal = row.querySelector("td:last-of-type h3 strong").innerText;
      grandTotal = parseFloat(grandTotal.replace(/\.|₹/g, "").trim());
      expect(amount).equal(grandTotal);
    });
  });
});
