describe("should have be a burrito builder page", () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders', { fixture: "noOrder.json" })
      .visit('http://localhost:3000/')
  })
  it("Should be able to visit the page and see title", () => {
    cy.get("[data-testid=title]")
      .should("be.visible")
  })
  it("should be able to see submit order button", () => {
    cy.get("[data-testid=submit-button]")
      .should("be.visible")
  })
  it("should have an order section", () => {
    cy.get("[data-testid=orders-section]")
      .contains("No orders yet!")
  })
  it("should have a input for name", () => {
    cy.get("[data-testid=name-input")
      .should("be.visible")
  })
  it("should have ingredient buttons", () => {
    cy.get("[data-testid=carnitas]")
      .should("be.visible")
  })
  it("should have a place for order being built to be displayed", () => {
    cy.get("[data-testid=order-builder]")
      .contains("Order: Nothing selected")
  })
});

describe("should have a burrito build page with burritos", () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders', {fixture: "oneOrderAPI.json"})
      .visit('http://localhost:3000/')
  })
  it("should have an order section", () => {
    cy.get("[data-testid=orders-section]")
      .should("be.visible")
  })
})