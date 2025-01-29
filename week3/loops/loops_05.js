/* 
Write a function named calculateAverageUntilZero:
- Continuously prompt the user to input numbers.
- Stop asking for inputs when the user enters 0.
- Calculate and log the average of all entered numbers in the console once the loop ends.
 */

const calculateAverageUntilZero = () => {
    let userInput;
    let res = 0;
    let count = 0;
    while (userInput !== 0) {
        userInput = +prompt('Enter a number');
        res += userInput;
        count++;
    }
    console.log('Average is', res / count);
}

calculateAverageUntilZero();