describe("notas", function() {
  describe("esNotaBochazo", function() {
    it("5 no es una nota bochazo", function() {
      esNotaBochazo 5  `shouldBe` False;
    });

    it("2 es una nota bochazo", function() {
      esNotaBochazo 2  `shouldBe` True;
    });
  });
  describe("aprobo", function() {
    it("aprobo (5,4) == true", function() {
      aprobo (5,4) `shouldBe` True;
    });

    it("aprobo (3,10) == false", function() {
	    aprobo (3,10) `shouldBe` False;
    });
  });
  describe("promociono", function() {
    it("promociono (7,8) == true", function() {
      promociono (7,8) `shouldBe` True;
    });

    it("promociono (6,6) == false", function() {
      promociono (6,6) `shouldBe` False;
    });
  });
});