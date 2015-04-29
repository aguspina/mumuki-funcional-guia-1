describe("fahrToCelsius", function() {
  it("212 °F -> 100 °C", function() {
    expect(fahrToCelsius(212)).to.equal(100);
  });

  it("104 °F -> 40 °C", function() {
    expect(fahrToCelsius(104)).to.equal(40);
  });

  it("50 °F -> 10 °C", function() {
    expect(fahrToCelsius(50 )).to.equal(10);
  });

  it("86 °F -> 30 °C", function() {
    expect(fahrToCelsius(86 )).to.equal(30);
  });
});
