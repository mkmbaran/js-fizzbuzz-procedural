/* eslint-disable prettier/prettier */
const answer = require('../src/fizzbuzz.js')

it("FizzBuzzes", () => {
    expect(answer).toEqual([1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'FizzBuzz'])
})
