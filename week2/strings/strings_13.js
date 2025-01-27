/* Create a variable longText and assign it the value "The quick brown fox jumps over the lazy dog."
Use .slice() to extract "quick brown fox".
Print the sliced portion using console.log().
Example output:
"Sliced text: quick brown fox" */

let longText = "The quick brown fox jumps over the lazy dog.";
let slicedText = longText.slice(4, 20);
console.log('Sliced text:', slicedText);