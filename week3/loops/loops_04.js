/* 
Write a function named countEvenNumbers:
- Prompt the user to input 20 numbers one by one.
- After all numbers are entered, log how many of them were even.
Display the result in the console. 
*/

const countEvenNumbers = () => {
    let userInput;
    let count = 0;
    for (let i = 1; i <= 20; i++) {
        userInput = prompt('Enter a number');
        if (+userInput % 2 === 0)
            count++;
    }
    console.log(count);
};

countEvenNumbers();