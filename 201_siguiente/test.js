describe("siguiente", function() {
  it("siguiente(1 == 2", function() {
    expect(siguiente(1)).to.equal(2);
  });

  it("siguiente(4 == 5", function() {
    expect(siguiente(4)).to.equal(5);
  });

  it("siguiente(100 == 101", function() {
    expect(siguiente(100)).to.equal(101);
  });
});