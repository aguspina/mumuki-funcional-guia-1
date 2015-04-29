describe("cuentaBizarra", function() {
  it("cuentaBizarra([7,8]) == 56", function() {
    assert.equal(cuentaBizarra([7,8]), 56);
  });

  it("cuentaBizarra([9,5]) == 14", function() {
    assert.equal(cuentaBizarra([9,5]), 14);
  });

  it("cuentaBizarra([5,16]) == 11", function() {
    assert.equal(cuentaBizarra([5,16]), 11);
  });
});
