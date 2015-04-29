describe("esNumeroPositivo", function() {
  it("2 es un numero positivo", function() {
    assert(esNumeroPositivo(2));
  });

  it("5 es un numero positivo", function() {
    assert(esNumeroPositivo(5));
  });

  it("3.4 es un numero positivo", function() {
    assert(esNumeroPositivo(3.4));
  });

  it("-8.7 no es un numero positivo", function() {
    assert(!esNumeroPositivo(-8.7));
  });

  it("-950 no es un numero positivo", function() {
    assert(!esNumeroPositivo(-950));
  });
});