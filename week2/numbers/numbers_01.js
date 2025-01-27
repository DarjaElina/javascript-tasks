/* 
Create two variables:
numString1 with the value "42".
numString2 with the value "3.14".
Use parseInt() to convert numString1 into an integer.
Use parseFloat() to convert numString2 into a floating-point number.
Print the results using console.log() with messages:
"The integer is 42."
"The floating-point number is 3.14."
*/

let numString1 = '42';
let numString2 = '3.14';
let integer1 = parseInt(numString1);
let integer2 = Number.parseFloat(numString1);

let float1 = parseFloat(numString2);
let float2 = Number.parseFloat(numString2);

console.log(`The integer is ${integer2}.`);
console.log(`The floating-point number is ${float2}.`);


// console.log('The integer is ' + integer1); // plus converts integer1 back to string
// console.log('The floating-point number is', float1); // comma keeps the type of the variable