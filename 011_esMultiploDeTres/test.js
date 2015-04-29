describe("esMultiploDeTres", function(){
  it( "devuelve True dado un 3", function(){
    expect(esMultiploDeTres(3  )).to.be.true;
  });
  it ("devuelve True dado un 9", function(){
    expect(esMultiploDeTres( 9)).to.be.true;
  });
  it ("devuelve True dado un 90", function(){
    expect(esMultiploDeTres(90)).to.be.true;
  })
  it ("devuelve False dado un 91", function(){
    expect(esMultiploDeTres(91)).to.be.false;
  })
})
