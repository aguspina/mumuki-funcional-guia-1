describe("area", function() {
  it("devuelve 12 dado un 3 y un 4", function() {
    expect(area(3, 4)).to.equal(12);
  });

  it("devuelve 51 dado un 25.5 y un 2", function() {
    expect(area(25.5, 2)).to.equal(51);
  });

  it("devuelve 10 dado un 10 y un 1", function() {
    expect(area(10, 1)).to.equal(10);
  });

  it("devuelve 10 dado un 1 y un 10", function() {
    expect(area(1, 10)).to.equal(10);
  });
});
