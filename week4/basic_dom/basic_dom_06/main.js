/* 
Create a form with a required name and email field.
Write JavaScript to:
- Prevent form submission if either field is empty.
- Display an error message if fields are missing. 
*/

const signupBtn = document.querySelector('button');
const username = document.querySelector('#name');
const email = document.querySelector('#email');
const errorMessage = document.querySelector('#error_message');
const validateForm = (e) => {
    e.preventDefault();
    if (username.value.length === 0 || email.value.length === 0) {
        errorMessage.textContent = 'Please enter valid name and email';
    } else {
        username.value = '';
        email.value = '';
        errorMessage.textContent = "User registered successfully";
    }
        
};

signupBtn.addEventListener('click', validateForm);

