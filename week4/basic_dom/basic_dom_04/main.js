/*
Create an HTML file with a <p> element and a button.
Write JavaScript to toggle the visibility of the paragraph each time the button is clicked.
 */

const paragraph = document.querySelector('p');
const btn = document.querySelector('button');

const toggleVisibility = () => {
   paragraph.classList.toggle('hidden');
}

btn.addEventListener('click', toggleVisibility);