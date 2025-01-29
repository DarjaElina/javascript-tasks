/* 
Write a function named findMinMax:
- Ask the user how many numbers they want to input.
- Then prompt them to enter that many numbers.
- Once all numbers are entered, determine and log:
- The smallest number.
- The largest number.
Display the results in the console. 
*/

const findMinMax = () => {
    let numberCount = +prompt('How many numbers would you like to enter?');
    let arr = [];
    for (let i = 0; i < numberCount; i++) {
        let num = +prompt('Enter a number');
        arr.push(num);
    };
    if (numberCount > 0) {
        console.log('The largest is', Math.max(...arr));
        console.log('The smallest is', Math.min(...arr));
    }
}

findMinMax();