describe("CooperTest", function() {
  var person;

  describe("Male", function() {

    describe("Age 13-14", function(){
      beforeEach(function(){
        person = new Person({gender: 'male', age: 14, distance: 2173});
        cooper_test = new CooperTest();
      });

      it("should have gender male", function(){
        expect(person.gender).toEqual('male');
      });
      it("should be 14 years old", function(){
        expect(person.age).toEqual(14);
      });
      it("should have run a distance of 2173 meters", function(){
        expect(person.distance).toEqual(2173);
      });
      it("should have a Cooper Test Result of \"Below Average\"", function(){
        person.cooper_result();
        expect(person.message).toEqual("Below Average");
      });
    })

    describe("Age 15-16", function(){
      beforeEach(function(){
        person = new Person({gender: 'male', age: 15, distance: 2373});
        cooper_test = new CooperTest();
      });

      it("should have gender male", function(){
        expect(person.gender).toEqual('male');
      });
      it("should be 15 years old", function(){
        expect(person.age).toEqual(15);
      });
      it("should have run a distance of 2373 meters", function(){
        expect(person.distance).toEqual(2373);
      });
      it("should have a Cooper Test Result of \"Average\"", function(){
        person.cooper_result();
        expect(person.message).toEqual("Average");
      });
    })

    describe("Age 17-19", function(){
      beforeEach(function(){
        person = new Person({gender: 'male', age: 18, distance: 2873});
        cooper_test = new CooperTest();
      });

      it("should have gender male", function(){
        expect(person.gender).toEqual('male');
      });
      it("should be 18 years old", function(){
        expect(person.age).toEqual(18);
      });
      it("should have run a distance of 2873 meters", function(){
        expect(person.distance).toEqual(2873);
      });
      it("should have a Cooper Test Result of \"Above Average\"", function(){
        person.cooper_result();
        expect(person.message).toEqual("Above Average");
      });
    })

    describe("Age 20-29", function(){
      beforeEach(function(){
        person = new Person({gender: 'male', age: 25, distance: 1950});
        cooper_test = new CooperTest();
      });

        it("should have gender male", function(){
          expect(person.gender).toEqual('male');
        });
        it("should be 25 years old", function(){
          expect(person.age).toEqual(25);
        });
        it("should have run a distance of 1950 meters", function(){
          expect(person.distance).toEqual(1950);
        });
        it("should have a Cooper Test Result of \"poor\"", function(){
          person.cooper_result();
          expect(person.message).toEqual("Poor");
        });
    })

    describe("Age 30-39", function(){
      beforeEach(function(){
        person = new Person({gender: 'male', age: 33, distance: 2723});
        cooper_test = new CooperTest();
      });

        it("should have gender male", function(){
          expect(person.gender).toEqual('male');
        });
        it("should be 33 years old", function(){
          expect(person.age).toEqual(33);
        });
        it("should have run a distance of 2723 meters", function(){
          expect(person.distance).toEqual(2723);
        });
        it("should have a Cooper Test Result of \"Excellent\"", function(){
          person.cooper_result();
          expect(person.message).toEqual("Excellent");
        });
      })

    describe("Age 40-49", function(){
      beforeEach(function(){
        person = new Person({gender: 'male', age: 48, distance: 2411});
        cooper_test = new CooperTest();
      });

        it("should have gender male", function(){
          expect(person.gender).toEqual('male');
        });
        it("should be 48 years old", function(){
          expect(person.age).toEqual(48);
        });
        it("should have run a distance of 2411 meters", function(){
          expect(person.distance).toEqual(2411);
        });
        it("should have a Cooper Test Result of \"Above Average\"", function(){
          person.cooper_result();
          expect(person.message).toEqual("Above Average");
        });
    })

    describe("Age 50+", function(){
      beforeEach(function(){
        person = new Person({gender: 'male', age: 78, distance: 2411});
        cooper_test = new CooperTest();
      });

        it("should have gender male", function(){
          expect(person.gender).toEqual('male');
        });
        it("should be 78 years old", function(){
          expect(person.age).toEqual(78);
        });
        it("should have run a distance of 2411 meters", function(){
          expect(person.distance).toEqual(2411);
        });
        it("should have a Cooper Test Result of \"Excellent\"", function(){
          person.cooper_result();
          expect(person.message).toEqual("Excellent");
        });
    })
  });

  describe("Female", function() {

    describe("Age 13-14", function(){
      beforeEach(function(){
        person = new Person({gender: 'female', age: 13, distance: 2173});
        cooper_test = new CooperTest();
      });

      it("should have gender female", function(){
        expect(person.gender).toEqual('female');
      });
      it("should be 13 years old", function(){
        expect(person.age).toEqual(13);
      });
      it("should have run a distance of 2173 meters", function(){
        expect(person.distance).toEqual(2173);
      });
      it("should have a Cooper Test Result of \"Excellent\"", function(){
        person.cooper_result();
        expect(person.message).toEqual("Excellent");
      });
    })

    describe("Age 15-16", function(){
      beforeEach(function(){
        person = new Person({gender: 'female', age: 16, distance: 2373});
        cooper_test = new CooperTest();
      });

      it("should have gender female", function(){
        expect(person.gender).toEqual('female');
      });
      it("should be 15 years old", function(){
        expect(person.age).toEqual(16);
      });
      it("should have run a distance of 2373 meters", function(){
        expect(person.distance).toEqual(2373);
      });
      it("should have a Cooper Test Result of \"Excellent\"", function(){
        person.cooper_result();
        expect(person.message).toEqual("Excellent");
      });
    })

    describe("Age 17-19", function(){
      beforeEach(function(){
        person = new Person({gender: 'female', age: 18, distance: 2873});
        cooper_test = new CooperTest();
      });

      it("should have gender female", function(){
        expect(person.gender).toEqual('female');
      });
      it("should be 18 years old", function(){
        expect(person.age).toEqual(18);
      });
      it("should have run a distance of 2873 meters", function(){
        expect(person.distance).toEqual(2873);
      });
      it("should have a Cooper Test Result of \"Excellent\"", function(){
        person.cooper_result();
        expect(person.message).toEqual("Excellent");
      });
    })

    describe("Age 20-29", function(){
      beforeEach(function(){
        person = new Person({gender: 'female', age: 25, distance: 1950});
        cooper_test = new CooperTest();
      });

        it("should have gender female", function(){
          expect(person.gender).toEqual('female');
        });
        it("should be 25 years old", function(){
          expect(person.age).toEqual(25);
        });
        it("should have run a distance of 1950 meters", function(){
          expect(person.distance).toEqual(1950);
        });
        it("should have a Cooper Test Result of \"Average\"", function(){
          person.cooper_result();
          expect(person.message).toEqual("Average");
        });
    })

    describe("Age 30-39", function(){
      beforeEach(function(){
        person = new Person({gender: 'female', age: 33, distance: 2323});
        cooper_test = new CooperTest();
      });

        it("should have gender female", function(){
          expect(person.gender).toEqual('female');
        });
        it("should be 33 years old", function(){
          expect(person.age).toEqual(33);
        });
        it("should have run a distance of 2323 meters", function(){
          expect(person.distance).toEqual(2323);
        });
        it("should have a Cooper Test Result of \"Above Average\"", function(){
          person.cooper_result();
          expect(person.message).toEqual("Above Average");
        });
      })

    describe("Age 40-49", function(){
      beforeEach(function(){
        person = new Person({gender: 'female', age: 48, distance: 1311});
        cooper_test = new CooperTest();
      });

        it("should have gender female", function(){
          expect(person.gender).toEqual('female');
        });
        it("should be 48 years old", function(){
          expect(person.age).toEqual(48);
        });
        it("should have run a distance of 1311 meters", function(){
          expect(person.distance).toEqual(1311);
        });
        it("should have a Cooper Test Result of \"Below Average\"", function(){
          person.cooper_result();
          expect(person.message).toEqual("Below Average");
        });
    })

    describe("Age 50+", function(){
      beforeEach(function(){
        person = new Person({gender: 'female', age: 78, distance: 411});
        cooper_test = new CooperTest();
      });

        it("should have gender female", function(){
          expect(person.gender).toEqual('female');
        });
        it("should be 78 years old", function(){
          expect(person.age).toEqual(78);
        });
        it("should have run a distance of 411 meters", function(){
          expect(person.distance).toEqual(411);
        });
        it("should have a Cooper Test Result of \"Poor\"", function(){
          person.cooper_result();
          expect(person.message).toEqual("Poor");
        });
    })
  });
});
