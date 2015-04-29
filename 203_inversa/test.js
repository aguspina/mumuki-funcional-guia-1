describe("inversa", function() {
  it("inversa(1) == 1", function() {
    assert.equal(inversa(1), 1);
  });

  it("inversa(4) == 0.25", function() {
    assert.equal(inversa(4), 0.25);
  });

  it("inversa(0.5) == 2", function() {
    assert.equal(inversa(0.5), 2);
  });
});
