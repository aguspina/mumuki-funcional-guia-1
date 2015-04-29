describe("esMultiploDe", function(){
  it("devuelve True dado un 3 y un 3", function(){
    expect(esMultiploDe(3, 3)).to.be.true;
  });

  it("devuelve True dado un 3 y un 1", function(){
    expect(esMultiploDe(3, 1)).to.be.true;
  });

  it("devuelve True dado un 10 y un 1", function(){
    expect(esMultiploDe(10, 1)).to.be.true;
  });

  it("devuelve True dado un 10 y un 2", function(){
    expect(esMultiploDe(10, 2)).to.be.true;
  });

  it("devuelve True dado un 20 y un 5", function(){
    expect(esMultiploDe(20, 5)).to.be.true;
  });

  it("devuelve False dado un 3 y un 2", function(){
    expect(esMultiploDe(3, 2)).to.be.false;
  });

  it("devuelve False dado un 30 y un 40", function(){
    expect(esMultiploDe(30, 40)).to.be.false;
  });

  it("devuelve False dado un 8 y un 7", function(){
    expect(esMultiploDe(8, 7)).to.be.false;
  });
});