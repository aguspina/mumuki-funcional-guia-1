describe("inversaRaizCuadrada", function() {
  it("inversaRaizCuadrada(4) == 0.5", function() {
    assert.equal(inversaRaizCuadrada(4), 0.5);
  });

  it("inversaRaizCuadrada(16) == 0.25", function() {
    assert.equal(inversaRaizCuadrada(16), 0.25);
  });

  it("inversaRaizCuadrada(100) == 0.1", function() {
    assert.equal(inversaRaizCuadrada(100), 0.1);
  });
});