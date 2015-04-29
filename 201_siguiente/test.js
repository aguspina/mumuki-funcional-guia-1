describe("siguiente", function() {
  it("siguiente(1 == 2", function() {
    assert.strictEqual(siguiente(1), 2);
  });

  it("siguiente(4 == 5", function() {
    assert.strictEqual(siguiente(4), 5);
  });

  it("siguiente(100 == 101", function() {
    assert.strictEqual(siguiente(100), 101);
  });
});