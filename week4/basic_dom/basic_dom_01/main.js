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

