/* 
Write a function named validatePassword:
- Use a loop to allow the user to input a password.
- If the password is "correct123", log: "Access granted!" and exit the loop.
- If incorrect, prompt the user again with: "Try again!".
 */

const validatePassword = () => {
    let pass = prompt('Enter your password');
    while (pass !== 'correct123') {
        pass = prompt('try again');
    }
    alert('Access granted')
};
validatePassword();