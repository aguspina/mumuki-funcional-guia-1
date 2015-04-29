describe("esCuadradoPerfecto", function() {
  it("1 es cuadrado perfecto", function() {
    assert(esCuadradoPerfecto(1));
  });

  it("4 es cuadrado perfecto", function() {
    assert(esCuadradoPerfecto(4));
  });

  it("16 es cuadrado perfecto", function() {
    assert(esCuadradoPerfecto(16));
  });

  it("81 es cuadrado perfecto", function() {
    assert(esCuadradoPerfecto(81));
  });

  it("82 NO es cuadrado perfecto", function() {
    assert(!esCuadradoPerfecto(82));
  });

  it("11 NO es cuadrado perfecto", function() {
    assert(!esCuadradoPerfecto(10));
  });

  it("26 NO es cuadrado perfecto", function() {
    assert(!esCuadradoPerfecto(26));
  });
});
