describe("esMultiploDe", function(){
  it("devuelve True dado un 3 y un 3", function(){
    assert(esMultiploDe(3, 3));
  });

  it("devuelve True dado un 3 y un 1", function(){
    assert(esMultiploDe(3, 1));
  });

  it("devuelve True dado un 10 y un 1", function(){
    assert(esMultiploDe(10, 1));
  });

  it("devuelve True dado un 10 y un 2", function(){
    assert(esMultiploDe(10, 2));
  });

  it("devuelve True dado un 20 y un 5", function(){
    assert(esMultiploDe(20, 5));
  });

  it("devuelve False dado un 3 y un 2", function(){
    assert(!esMultiploDe(3, 2));
  });

  it("devuelve False dado un 30 y un 40", function(){
    assert(!esMultiploDe(30, 40));
  });

  it("devuelve False dado un 8 y un 7", function(){
    assert(!esMultiploDe(8, 7));
  });
});