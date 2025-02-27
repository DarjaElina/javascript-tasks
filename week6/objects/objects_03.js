/* Task 1
Create a constructor function `User` that takes `username` and `email` as parameters.
It should create an object with these properties and a method `showInfo` that logs user details.
Instantiate a new user and call `showInfo()`.
*/

function User(username, email) {
    this.username = username;
    this.email = email;

    this.showInfo = function () {
        console.log(`Username is ${this.username}, email is ${this.email}`);
    }
}

const user = new User('delina', 'd.elina@example.com');
user.showInfo();

/* Task 2
Modify Task 1: Use an ES6 `class` instead of a constructor function to define `User`.
Add a method `changeEmail(newEmail)` that updates the user's email.
*/

class User1 {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    showInfo() {
        console.log(`Username is ${this.username}, email is ${this.email}`);
    }

    changeEmail(newEmail) {
        this.email = newEmail;
    }
}

const user1 = new User1('delina', 'd.elina@example.com');
user1.showInfo();
user1.changeEmail('new.email@example.com');
user1.showInfo();

/* Task 3
Create an object `theme` with properties `name` (light or dark) and `isActive`.
Add a button in HTML. When clicked, toggle the theme between light and dark, updating the `isActive` property.
*/

const theme = {
    name: 'dark',
    isActive: true
}

const toggleThemeBtn = document.querySelector('#toggleTheme');
const themeText = document.querySelector('#currentTheme');
toggleThemeBtn.addEventListener('click', () => {
    theme.isActive = !theme.isActive;
    themeText.textContent = `Dark theme is enabled: ${theme.isActive}`
});



/* Task 4
Create an object `counter` with a `value` property.
Add two buttons in HTML: one to increase `value`, another to decrease it.
Display `value` in an HTML element and update it dynamically when buttons are clicked.
*/

const counter = {
    value: 0
}
const incBtn = document.querySelector('#incrementBtn');
const decBtn = document.querySelector('#decrementBtn');
const displayCounter = document.querySelector('#displayCounter');
displayCounter.textContent = counter.value;

incBtn.addEventListener('click', () => {
    counter.value++;
    displayCounter.textContent = counter.value;
});
decBtn.addEventListener('click', () => {
    counter.value--;
    displayCounter.textContent = counter.value;
});

/* Task 5
Create an object `product` with `name`, `price`, and `quantity`.
Add an input field in HTML where the user can enter a quantity to purchase.
Update the `quantity` property and display the total price dynamically.
*/

const product = {
    name: 'Apple',
    price: 2,
    quantity: 10
}

const quantityInput = document.querySelector('#quantityInput');
const displayPrice = document.querySelector('#displayPrice');
const calculateTotalBtn = document.querySelector('#calculateTotal');
displayPrice.textContent = product.price * product.quantity;

calculateTotalBtn.addEventListener('click', () => {
    if (!quantityInput.value) {
        alert('Invalid quantity :(');
        return;
    }
    product.quantity = parseFloat(quantityInput.value);
    displayPrice.textContent = product.price * product.quantity;
})


/* Task 6
Define a `Task` constructor that takes `title`, `description`, and `completed`.
Add a button in HTML that, when clicked, adds a new `Task` object to a `tasks` array and displays it on the page.
*/

const tasks = [];

class Task {
    constructor(title, description, completed) {
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
}

const addTaskBtn = document.querySelector('#addTask');
addTaskBtn.addEventListener('click', () => {
    const title = document.querySelector('#taskTitle');
    const description = document.querySelector('#taskDescription');
    const isCompleted = document.querySelector('#isCompleted');
    const task = new Task(title, description,)
})

/* Task 7
Create an object `weatherApp` with a method `fetchWeather(city)`.
Use `fetch` to get weather data from an API and display it in an HTML element.
(API: OpenWeather or any free weather API)
*/

// Your code here

/* Task 8
Create a constructor function `Car` that takes `brand`, `model`, and `year`.
In the constructor, add a method `age()` that calculates the car’s age.
Instantiate a new `Car` and display its age on the webpage.
*/

// Your code here

/* Task 9
Create an array `users` where each user has `name` and `score`.
Add a button in HTML that sorts the users by score in descending order and updates the displayed list.
*/

// Your code here

/* Task 10
Create an object `shoppingList` with an array `items`.
Add an input field and button to allow users to add new items to `items` and display the updated list.
*/

// Your code here

/* Task 11
Create an array of `posts` where each post has `title`, `content`, and `likes`.
Add a "Like" button next to each post that increases the `likes` count and updates the display.
*/

// Your code here

/* Task 12
Create a constructor function `Employee` with `name`, `position`, and `salary`.
Add a method `increaseSalary(percent)` that increases the salary by a given percentage.
Create an employee and increase their salary dynamically.
*/

// Your code here

/* Task 13
Create an object `timer` with `seconds` and a method `start()` that counts seconds up.
Display the timer in an HTML element and update it every second.
*/

// Your code here

/* Task 14
Create a constructor function `Book` that takes `title`, `author`, and `pages`.
Create a simple book library that allows users to add books via an HTML form and displays them dynamically.
*/

// Your code here

/* Task 15
Create an object `foxTracker` with a `foxes` array.
Add an input field and button that allows users to add new foxes (with name and location) to the array.
Display the list of foxes dynamically in an HTML element.
*/

// Your code here