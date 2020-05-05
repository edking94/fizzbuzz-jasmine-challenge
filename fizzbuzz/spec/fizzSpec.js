describe("my fizzbuzz function", function() {

       beforeEach(function() {
        fizzbuzz = new fizzBuzz()
    });

    describe("Returns number, fizz, fizzbuzz, buzz", function() {


        it("should exist", function() {
            expect(fizzBuzz).toBeDefined()
        });

        it("should return FizzBuzz when called as fizzbuzz(15)", function() {
            var result = fizzBuzz(15)
            expect(result).toBe("FizzBuzz");
        });

        it("should return Fizz when called as fizzbuzz(9)", function() {
            var result = fizzBuzz(9)
            expect(result).toBe("Fizz");
        });

        it("should return Buzz when called as fizzbuzz(10)", function() {
            var result = fizzBuzz(10)
            expect(result).toBe("Buzz");
        });

        it("should return number when called as fizzbuzz(0)", function() {
            var result = fizzBuzz(2)
            expect(result).toBe(2);
        }); 
    });
});