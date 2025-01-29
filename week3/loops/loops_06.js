/* 
Write a function named askToContinue:
- Prompt the user to enter a number.
- Then, ask: "Do you want to continue giving numbers? (y/n)".
- If the user answers "y", ask for another number.
- If the user answers "n", stop asking and log the average of all entered numbers in the console. 
*/

const askToContinue = () => {
    let numberInput;
    let questionInput;
    let count = 0;
    let total = 0;
    while (questionInput !== 'n') {
        numberInput = +prompt('Enter a number');
        questionInput = prompt('Would you like to continue entering numbers?');
        count++;
        total += numberInput;
    }
    console.log('The average is:', total / (count / 2));
}

askToContinue();