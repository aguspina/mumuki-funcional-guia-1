describe("esMayorDeEdad", function() {
  it('esMayorDeEdad({nombre:"fernando",edad: 25}) == true', function() {
    assert(esMayorDeEdad({nombre:"fernando",edad: 25}));
  });

  it('esMayorDeEdad({nombre:"juan",edad:15}) == false', function() {
    assert(!esMayorDeEdad({nombre:"juan",edad:15}));
  });
});
