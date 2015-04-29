describe("fahrToCelsius", function() {
  it("212 °F -> 100 °C", function() {
    assert.strictEqual(fahrToCelsius(212), 100);
  });

  it("104 °F -> 40 °C", function() {
    assert.strictEqual(fahrToCelsius(104), 40);
  });

  it("50 °F -> 10 °C", function() {
    assert.strictEqual(fahrToCelsius(50 ), 10);
  });

  it("86 °F -> 30 °C", function() {
    assert.strictEqual(fahrToCelsius(86 ), 30);
  });
});
