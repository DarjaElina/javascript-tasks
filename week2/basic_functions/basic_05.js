/* Create a function named generateRandomNumber that:
Takes two parameters, min and max.
Returns a random integer between min and max (inclusive).
Call the function with the arguments 1 and 10.
Print the result using console.log().

Hint: Use Math.random(), Math.floor(), and simple math.

*/

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log(generateRandomNumber(1, 10));
console.log(Math.random())

// calling with 1 and 10
// 0.7141102232305572
// max - 1 + 1 = 10 - 1 - 1 = 10
// 0.7141102232305572 * 10 = 7.1...
// 7 + 1 = 8;

console.log(( 0.7141102232305572 * (10 - 1 + 1)))