describe("notasFinales2-upla", function() {
  describe("notasFinales", function() {
    it("notasFinales([[2,8],[3,10]] == [3,10]", function() {
      expect(notasFinales([[2,8],[3,10]])).to.equal([3,10]);
    });

    it("notasFinales([[-1,5],[4,-1]] == [4,5]", function() {
      expect(otasFinales([[-1,5],[4,-1]])).to.equal([4,5]);
    });

    it("notasFinales([[4,5],[6,6]] == [6,6]", function() {
      expect(notasFinales([[4,5],[6,6]])).to.equal([6,6]);
    });
  });

  describe("recuperoDeGusto", function() {
    it("recuperoDeGusto [[2,8],[5,10]]) == false", function() {
      expect(recuperoDeGusto([[2,8],[5,10]])).to.be.false;
    });

    it("recuperoDeGusto([[5,2],[5,10]]) == false", function() {
      expect(recuperoDeGusto([[5,2],[5,10]])).to.be.false;
    });


    it("recuperoDeGusto([[6,8],[8,10]]) == true", function() {
       expect(recuperoDeGusto(((6,8],[8,10]])).to.be.true;
    });

    it("recuperoDeGusto [[6,8],[4,10]] == True", function() {
       expect(recuperoDeGusto([[6,8],[4,10]])).to.be.true;
    });
  });
});

