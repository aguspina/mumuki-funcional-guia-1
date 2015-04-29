describe("pinos", function() {
  describe("pesoPino", function() {
    it("un pino de 2 metros pesa 600 kg", function() {
      assert.strictEqual(pesoPino(2, 600));
    });

    it("un pino de 5 metros pesa 1300 kg", function() {
      assert.strictEqual(pesoPino(5, 1300));
    });

  describe("esPesoUtil", function() {
    it("un pino de 500 kg es útil", function() {
      assert(esPesoUtil(500));
    });

    it("un pino de 1500 kg NO es útil", function() {
      assert(!esPesoUtil(1500));
    });

    it("un pino de 150 kg NO es útil", function() {
      assert(!esPesoUtil(150));
    });

  describe("sirvePino", function() {
    it("un pino de 2 metros es útil", function() {
      assert(sirvePino(2));
    });

    it("un pino de 5 metros NO es útil", function() {
      assert(!sirvePino(5));
    });

    it("un pino de 1 metro NO es útil", function() {
      assert(!sirvePino(1));
    });
  });
});
