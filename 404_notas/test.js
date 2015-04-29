describe("notas", function() {
  describe("esNotaBochazo", function() {
    it("5 no es una nota bochazo", function() {
      assert(!esNotaBochazo(5));
    });

    it("2 es una nota bochazo", function() {
      assert(esNotaBochazo(2));
    });
  });

  describe("aprobo", function() {
    it("aprobo([5,4]) == true", function() {
      assert(aprobo([5,4]));
    });

    it("aprobo([3,10]) == false", function() {
	    assert(!aprobo([3,10]));
    });
  });
  describe("promociono", function() {
    it("promociono([7,8]) == true", function() {
      assert(promociono([7,8]));
    });

    it("promociono([6,6]) == false", function() {
      assert(!promociono([6,6]));
    });
  });
});