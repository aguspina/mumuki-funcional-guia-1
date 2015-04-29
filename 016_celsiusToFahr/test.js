describe("celsiusToFahr", function() {
  it("100 °C -> 212 °F", function() {
    expect(celsiusToFahr(100)).to.equal(212);
  });

  it("40 °C -> 104 °F", function() {
    expect(celsiusToFahr(40)).to.equal(104);
  });

  it("10 °C -> 50 °F", function() {
    expect(celsiusToFahr(10)).to.equal(50);
  });

  it("30 °C -> 86 °F", function() {
    expect(celsiusToFahr(30)).to.equal(86);
  });
});