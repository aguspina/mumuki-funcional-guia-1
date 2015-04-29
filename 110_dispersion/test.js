describe("dispersion", function() {
  it("dispersion(1, 1, 1) == 0", function() {
    assert.strictEqual(dispersion(1, 1, 1), 0);
  });

  it("dispersion(1, 1, 10) == 9", function() {
    assert.strictEqual(dispersion(1, 1, 10), 9);
  });

  it("dispersion(11, 15, 4) == 11", function() {
    assert.strictEqual(dispersion(11, 15, 4), 11);
  });

  it("dispersion(101, 1, 203) == 202", function() {
    assert.strictEqual(dispersion(101, 1, 203), 202);
  });
});
