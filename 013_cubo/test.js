describe("cubo", function(){
  it("devuelve 8 dado un 2", function(){
    expect(cubo(2)).to.equal(8);
  });

  it("devuelve 27 dado un 3", function(){
    expect(cubo(2)).to.equal(8);
  });

  it("devuelve 1 dado un 1", function(){
    expect(cubo(1)).to.equal(1);
  });

  it("devuelve 0 dado un 0", function(){
    expect(cubo(0)).to.equal(0);
  });

  it("devuelve -1 dado un -1", function(){
    expect(cubo(-1)).to.equal(-1);
  });
})
