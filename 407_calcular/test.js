describe("calcular", function() {
  it("calcular([7,8]) == [7,9]", function() {
    assert.deepEqual(calcular([7,8]), [7,8]);
  });

  it("calcular([9,6]) == [9,6]", function() {
    assert.deepEqual(calcular([9,6]), [9,6]);
  });

  it("calcular([4,5]) == [8,16]", function() {
    assert.deepEqual(calcular([4,16)]) , [8, 16]);
  });

  it("calcular([4,5]) == [8,6]", function() {
    assert.deepEqual(calcular([4,5]), [8,6]);
  });

  it("calcular([3,7]) == [3,8]", function() {
    assert.deepEqual(calcular([3,7]), [3,8]);
  });
});
