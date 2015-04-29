describe "esBisiesto", function() {
  it "1004 es bisiesto", function() {
    expect(esBisiesto(1004)).to.be.true;
  });

  it "8 es bisiesto", function() {
    expect(esBisiesto(8)).to.be.true;
  });

  it "1996 es bisiesto", function() {
    expect(esBisiesto(1996)).to.be.true;
  });

  it "100 no es bisiesto", function() {
    expect(esBisiesto(100)).to.be.false;
  });

  it "2022 no es bisiesto", function() {
    expect(esBisiesto(2022)).to.be.false;
  });

  it "2021 no es bisiesto", function() {
    expect(esBisiesto(2021)).to.be.false;
  });

  it "2014 no es bisiesto", function() {
    expect(esBisiesto(2014)).to.be.false;
  });

  it "200 no es bisiesto", function() {
    expect(esBisiesto(200)).to.be.false;
  });
});


