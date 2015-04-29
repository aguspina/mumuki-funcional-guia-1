describe("dispersion", function() {
  it("dispersion(1, 1, 1) == 0", function() {
    expect(dispersion(1, 1, 1)).to.equal(0);
  });

  it("dispersion(1, 1, 10) == 9", function() {
    expect(dispersion(1, 1, 10)).to.equal(9);
  });

  it("dispersion(11, 15, 4) == 11", function() {
    expect(dispersion(11, 15, 4)).to.equal(11);
  });

  it("dispersion(101, 1, 203) == 202", function() {
    expect(dispersion(101, 1, 203)).to.equal(202);
  });
});
