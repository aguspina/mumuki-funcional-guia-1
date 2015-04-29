describe("triple", function() {
  it("triple(2) == 6", function() {
    expect(triple(2)).to.equal(6);
  });

  it("triple(5.5) == 16.5", function() {
    expect(triple(5.5)).to.equal(16.5);
  });

  it("triple(12) == 36", function() {
    expect(triple(12)).to.equal(36);
  });
});