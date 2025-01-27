/* Create a function named getLength that:
Takes one parameter, str.
Returns the length of str using .length.
Call the function with the string "JavaScript".
Print the result using console.log().

*/
function getLength(str) {
    return str.length;
}
const getLength1 = str => str.length;

const getLength2 = (str) => {
    return str.length;
}

console.log(getLength("JavaScript"));
console.log(getLength1("JavaScript"));
console.log(getLength2("JavaScript"));