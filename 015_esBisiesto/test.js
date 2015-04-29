//Temporal fix
function esMultiploDe(x, y) {
  return x % y == 0;
}

describe("esBisiesto", function() {
  it("1004 es bisiesto", function() {
    assert(esBisiesto(1004));
  });

  it("8 es bisiesto", function() {
    assert(esBisiesto(8));
  });

  it("1996 es bisiesto", function() {
    assert(esBisiesto(1996));
  });

  it("100 no es bisiesto", function() {
    assert(!esBisiesto(100));
  });

  it("2022 no es bisiesto", function() {
    assert(!esBisiesto(2022));
  });

  it("2021 no es bisiesto", function() {
    assert(!esBisiesto(2021));
  });

  it("2014 no es bisiesto", function() {
    assert(!esBisiesto(2014));
  });

  it("200 no es bisiesto", function() {
    assert(!esBisiesto(200));
  });
});


