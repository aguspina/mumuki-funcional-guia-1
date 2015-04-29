describe("esMayorDeEdad", function() {
  it('esMayorDeEdad({nombre:"fernando",edad: 25}) == true', function() {
    expect(esMayorDeEdad({nombre:"fernando",edad: 25})).to.be.true;
  });

  it('esMayorDeEdad({nombre:"juan",edad:15}) == false', function() {
    expect(esMayorDeEdad({nombre:"juan",edad:15})).to.be.false;
  });
});
