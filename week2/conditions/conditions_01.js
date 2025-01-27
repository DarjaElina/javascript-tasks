/* 
Write a function named checkAdult:
Take an age as a parameter.
If age is 18 or older, return "You are an adult."
Otherwise, return nothing.
Call the function with different ages and print the result.
 */


const checkAdult = (age) => {
    if (age >= 18) {
        return "You are an adult."
    };
};

const checkAdult2 = age => age >= 18 ? "You are an adult." : "";

console.log(checkAdult(20));
console.log(checkAdult2(10));

const age = 20;
const isAdult = age >= 18 ? "You are an adult." : "";