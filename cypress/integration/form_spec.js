describe("should have be a burrito builder page", () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders', { fixture: "noOrder.json" })
      .visit('http://localhost:3000/')
  })
  it("should be able to type a name", () => {
    cy.get("[data-testid=name-input")
      .type("Sally")
  })
  it("should be able to click ingredients and have them populate", () => {
    cy.get("[data-testid=carnitas]").click()
      .get("[data-testid=order-builder]")
      .contains("Order: carnitas")
      .get("[data-testid=beans]").click()
      .get("[data-testid=order-builder]")
      .contains("Order: beans, carnitas")
  })
  
})