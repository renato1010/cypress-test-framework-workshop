/// <reference types="Cypress" />
let reqBody = {
  name: "Learn e2e Test",
  isbn: "978-42424922-12",
  aisle: "2944kssds",
  author: "Edgar Allan Moe"
};
describe("First test with cy.request()", () => {
  it("Test a POST Request", function() {
    cy.request(
      "POST",
      "http://216.10.245.166/Library/Addbook.php",
      reqBody
    ).then(response => {
      expect(response.body).to.have.property("Msg");
      expect(response.status).to.equal(200);
    });
  });
});
