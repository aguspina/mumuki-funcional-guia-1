describe("cubo", function(){
  it("devuelve 8 dado un 2", function(){
    assert.strictEqual(cubo(2), 8);
  });

  it("devuelve 27 dado un 3", function(){
    assert.strictEqual(cubo(2), 8);
  });

  it("devuelve 1 dado un 1", function(){
    assert.strictEqual(cubo(1), 1);
  });

  it("devuelve 0 dado un 0", function(){
    assert.strictEqual(cubo(0), 0);
  });

  it("devuelve -1 dado un -1", function(){
    assert.strictEqual(cubo(-1), 1);
  });
})
