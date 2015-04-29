describe("haceFrioF", function() {
  it("212 °F no es frio", function() {
    expect(haceFrioF(212)).to.be.false;
  });

  it("104 °F no es frio", function() {
    expect(haceFrioF(104)).to.be.false;
  });

  it("50 °F no es frio", function() {
    expect(haceFrioF(50 ).to.be.false;
  });

  it("5 °F es frio", function() {
    expect(haceFrioF(5)).to.be.true;
  });
});