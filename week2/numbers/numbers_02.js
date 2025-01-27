/* Create a variable price and assign it the value 19.56789.
Use .toFixed() to:
Round the price to 2 decimal places.
Round the price to no decimal places.
Print both results using console.log() with messages:
"Price with 2 decimals: 19.57"
"Price with no decimals: 20"
 */

let price = 19.56789;
console.log('Price with 2 decimals:', price.toFixed(2));
console.log('Price with no decimals:', price.toFixed());

console.log(`Price with 2 decimals: ${price.toFixed(2)}`); // using template literals