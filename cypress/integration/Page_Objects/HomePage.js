export default class HomePage {
  get nameControl() {
    return cy.get('form-comp form .form-group input[name="name"].form-control');
  }
  get emailControl() {
    return cy.get(
      'form-comp form .form-group input[name="email"].form-control'
    );
  }
  get passControl() {
    return cy.get("input#exampleInputPassword1");
  }
  get twoWayDataBinding() {
    return cy.get('form-comp .container h4 > input[name="name"]');
  }
  get selectControl() {
    return cy.get("select#exampleFormControlSelect1");
  }
  get radio1Control() {
    return cy.get("input#exampleCheck1");
  }
  get bdayControl() {
    return cy.get('form-comp form .form-group input[name="bday"].form-control');
  }
  get radio2Control() {
    return cy.get("input#inlineRadio2");
  }
  get entrepRadioBtn() {
    return cy.get("input#inlineRadio3");
  }
  get shopNavBtn() {
    return cy.get(
      "app-navbar .container .navbar ul.navbar-nav li:last-of-type a"
    );
  }
}
