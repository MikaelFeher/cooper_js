describe("Person", function() {
  var person;

  beforeEach(function() {
    male_person = new Person({gender: 'male', age: 39, distance: 2900});
    female_person = new Person({gender: 'female', age: 50, distance: 1099});
  });

    it("should be male", function() {
      expect(male_person.gender).toEqual('male');
    });

    it("should be 39 years old", function() {
      expect(male_person.age).toEqual(39);
    });

    it("should have ran 2900 meters", function() {
      expect(male_person.distance).toEqual(2900);
    });

    it("should have a Cooper Test Result", function() {
      male_person.cooper_result();
      expect(male_person.message).toEqual("Excellent");
    });

    it("should be female", function() {
      expect(female_person.gender).toEqual('female');
    });

    it("should be 50 years old", function() {
      expect(female_person.age).toEqual(50);
    });

    it("should have ran 1000 meters", function() {
      expect(female_person.distance).toEqual(1099);
    });

    it("should have a poor Cooper Test Result", function() {
      female_person.cooper_result();
      expect(female_person.message).toEqual("Poor");
    });

});
