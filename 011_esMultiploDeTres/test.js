describe("esMultiploDeTres", function(){
  it( "devuelve True dado un 3", function(){
    assert(esMultiploDeTres(3));
  });
  it(("devuelve True dado un 9", function(){
    assert(esMultiploDeTres( 9));
  });
  it(("devuelve True dado un 90", function(){
    assert(esMultiploDeTres(90));
  })
  it(("devuelve False dado un 91", function(){
    assert(!esMultiploDeTres(91));
  })
})
