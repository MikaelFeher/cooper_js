describe("CooperTest", function() {
  var person;

  describe("Male Cooper Test", function(){
    beforeEach(function(){
      person = new Person({gender: 'male', age: 25, distance: 1950});
      cooper_test = new CooperTest();
    });

      it("should have gender male", function(){
        expect(person.gender)toEqual('male');
      });
  })
  describe("Female Cooper Test", function(){
    beforeEach(function(){
      person = new Person({gender: 'female', age: 18, distance: 2354});
      cooper_test = new CooperTest();
    });

      it("should have gender female", function(){
        expect(person.gender)toEqual('female');
      });
  })
});
