/* 
Use an HTML file with a <p> element that has the ID content.
Write JavaScript to select this element using getElementById.
Create a function that changes its text to "Hello, World!" when a button is clicked.
*/

const paragraph = document.getElementById('content');
console.log(paragraph);
console.log(paragraph.textContent);
const btn = document.getElementById('first_button');
console.log(btn);
const changeTextContent = () => {
    paragraph.textContent = 'Some new content';
    btn.textContent = 'I was clicked';
}

const changeTextContentBack = () => {
    paragraph.textContent = 'This is a cool paragraph.';
}

