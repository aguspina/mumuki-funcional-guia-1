describe("inversa", function() {
  it("inversa(1) == 1", function() {
    expect(inversa(1)).to.equal(1);
  });

  it("inversa(4) == 0.25", function() {
    expect(inversa(4)).to.equal(0.25);
  });

  it("inversa(0.5) == 2", function() {
    expect(inversa(0.5)).to.equal(2);
  });
});
