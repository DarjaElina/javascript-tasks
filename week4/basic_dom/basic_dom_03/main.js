/*
Create an HTML file with an <input> field and a <div> with the ID displayText.
Write JavaScript to:
- Continuously update the <div> with the input field's value as the user types.
- Use the input event for real-time updates.
*/

const input = document.querySelector('input');
const box = document.querySelector('#displayText');
const showLiveText = (e) => {
    box.textContent = e.target.value;
}

input.addEventListener('input', showLiveText);