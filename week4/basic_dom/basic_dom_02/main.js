/*
Use an HTML file with an <input> field, a <button>, and a <ul> list with the ID fruitList.
Write JavaScript to:
- Retrieve the value from the input field when the button is clicked.
- Create a new <li> element and set its text content to the input field's value.
- Append the <li> element to the list.
- Clear the input field after adding the fruit.
*/
const input = document.querySelector("#fruitInput");
const list = document.querySelector("#fruitList");
const btn = document.querySelector("#addFruitBtn");

const createNewItem = () => {
    const newListItem = document.createElement("li");
    list.appendChild(newListItem);
    newListItem.textContent = input.value;
    input.value = '';
};

btn.addEventListener('click', createNewItem);
