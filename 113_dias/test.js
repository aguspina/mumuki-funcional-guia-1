describe("dias", function() {
  it("110, 1 y 203 son dias locos", function() {
    assert(diasLocos(110, 1, 203));
  });

  it("110, 98 y 100 son dias parejos", function() {
    assert(diasParejos(110, 98, 100));
  });

  it("10, 20 y 60 son dias normales", function() {
    assert(diasNormales(10, 20, 60));
  });

  it("1, 200 y 500 NO son dias normales", function() {
    assert(!diasNormales(1, 200, 500));
  });

  it("110, 98 y 100 NO son dias locos", function() {
    assert(!diasLocos(110, 98, 100));
  });

  it("10, 20 y 60 NO son dias locos", function() {
    assert(!diasLocos(10, 20, 60));
  });

  it("10, 41 y 4 NO son dias parejos", function() {
    assert(!diasParejos(10, 41, 50));
  });

  it("110, 1 y 203 NO son dias parejos", function() {
    assert(!diasParejos(110, 1 ,203));
  });

  it("10, 20 y 60 NO son dias parejos", function() {
    assert(!diasParejos(10, 20, 60));
  });
});