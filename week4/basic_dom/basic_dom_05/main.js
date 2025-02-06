/*
Create an HTML file with:
- A <button> to change the background color.
- A <input> field for users to enter a color.
- A <p> element where the text color changes based on the input.

Write JavaScript to:
- Change the background color to a random color when the button is clicked.
- Update the paragraph’s text color to match the user’s input valu
*/

const btn = document.querySelector('button');
const text = document.querySelector('p');
const input = document.querySelector('input');


console.log(document.body.style)


function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const changeBackgroundColor = () => {
    document.body.style.backgroundColor = getRandomColor();
}

const updateTextColor = (e) => {
    text.style.color = e.target.value;
}

btn.addEventListener('click', changeBackgroundColor);
input.addEventListener('input', updateTextColor);