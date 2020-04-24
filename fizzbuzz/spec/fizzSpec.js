describe("my fizzBuzz function", function() {

    beforeEach(function() {
        fizzBuzz = new fizzBuzz();
    });

    describe("Returns number, fizz, buzz or fizzBuzz", function() {
        
        it ("should exist", function() {
            expect(fizzBuzz).toBeDefined();
        });

        it ("it should return Fizz when called as fizzBuzz(9)", function() {
            var result = fizzBuzz(9)
            expect(result).toBe("Fizz");
        });

        it ("it should return Buzz when called as fizzBuzz(10)", function() {
            var result = fizzBuzz(10)
            expect(result).toBe("Buzz");
        });

        it ("it should return FizzBuzz when called as fizzBuzz(15)", function() {
            var result = fizzBuzz(15)
            expect(result).toBe("FizzBuzz");
        });

        it ("it should return 2 when called as fizzBuzz(2)", function() {
            var result = fizzBuzz(2)
            expect(result).toBe(2);
        });
         });
          });

