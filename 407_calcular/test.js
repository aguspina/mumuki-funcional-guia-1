describe("calcular", function() {
  it("calcular([7,8]) == [7,9]", function() {
    expect(calcular([7,8])).to.equal([7,8]);
  });

  it("calcular([9,6]) == [9,6]", function() {
    expect(calcular([9,6])).to.equal([9,6]);
  });

  it("calcular([4,5]) == [8,16]", function() {
    expect(calcular([4,16)]) ).to.equal([8, 16]);
  });

  it("calcular([4,5]) == [8,6]", function() {
    expect(calcular([4,5])).to.equal([8,6]);
  });

  it("calcular([3,7]) == [3,8]", function() {
    expect(calcular([3,7])).to.equal([3,8]);
  });
});
