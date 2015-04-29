describe("celsiusToFahr", function() {
  it("100 °C -> 212 °F", function() {
    assert.strictEqual(celsiusToFahr(100), 212);
  });

  it("40 °C -> 104 °F", function() {
    assert.strictEqual(celsiusToFahr(40), 104);
  });

  it("10 °C -> 50 °F", function() {
    assert.strictEqual(celsiusToFahr(10), 50);
  });

  it("30 °C -> 86 °F", function() {
    assert.strictEqual(celsiusToFahr(30), 86);
  });
});