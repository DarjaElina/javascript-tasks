/* 
Create an HTML file with a button and a counter display.
Write JavaScript to count and display the number of times the button is clicked. 
*/

const incrementBtn = document.querySelector('#increment_btn');
const text = document.querySelector('p');
console.log(incrementBtn, text)
let count = 0;
const displayCounter = () => {
    count++;
    text.innerText = `Button has been clicked ${count} times`;
};

incrementBtn.addEventListener('click', displayCounter);