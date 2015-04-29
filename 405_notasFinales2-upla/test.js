describe("notasFinales2-upla", function() {
  describe("notasFinales", function() {
    it("notasFinales([[2,8],[3,10]] == [3,10]", function() {
      assert.deepEqual(notasFinales([[2,8],[3,10]]), [3,10]);
    });

    it("notasFinales([[-1,5],[4,-1]] == [4,5]", function() {
      assert.deepEqual(otasFinales([[-1,5],[4,-1]]), [4,5]);
    });

    it("notasFinales([[4,5],[6,6]] == [6,6]", function() {
      assert.deepEqual(notasFinales([[4,5],[6,6]]), [6,6]);
    });
  });

  describe("recuperoDeGusto", function() {
    it("recuperoDeGusto [[2,8],[5,10]]) == false", function() {
      assert(!recuperoDeGusto([[2,8],[5,10]]));
    });

    it("recuperoDeGusto([[5,2],[5,10]]) == false", function() {
      assert(!recuperoDeGusto([[5,2],[5,10]]));
    });

    it("recuperoDeGusto([[6,8],[8,10]]) == true", function() {
       assert(recuperoDeGusto(((6,8],[8,10]]));
    });

    it("recuperoDeGusto [[6,8],[4,10]] == True", function() {
       assert(recuperoDeGusto([[6,8],[4,10]]));
    });
  });
});

