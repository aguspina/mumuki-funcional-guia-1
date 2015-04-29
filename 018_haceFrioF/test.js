//Temporal fix
function fahrToCelsius(x) {
 return (x - 32) * 5 / 9;
}


describe("haceFrioF", function() {
  it("212 °F no es frio", function() {
    assert(!haceFrioF(212));
  });

  it("104 °F no es frio", function() {
    assert(!haceFrioF(104));
  });

  it("50 °F no es frio", function() {
    assert(!haceFrioF(50));
  });

  it("5 °F es frio", function() {
    assert(haceFrioF(5));
  });
});