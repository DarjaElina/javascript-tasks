/* 
Write a function named sumAndAverage:
- Ask the user to input ten numbers.
- Calculate and log:
    - The sum of the numbers.
    - The average of the numbers.
    - The smallest and largest numbers.
Display all results in the console.
*/

const sumAndAverage = () => {
    let userInput;
    let sum = 0;
    let arr = [];
    for (let i = 0; i < 10; i++) {
        userInput = +prompt('Enter a number');
        sum += userInput;
        arr.push(userInput);
    }
    console.log('The sum is', sum);
    console.log('The average is', sum / 10);
    console.log('The smallest is', Math.min(...arr))
    console.log('The largest is', Math.max(...arr));
    console.log(arr)
}

sumAndAverage();