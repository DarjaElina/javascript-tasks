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
const taskList = document.querySelector('#taskList');

const displayTasks = () => {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        const taskTitle = document.createElement('p');
        const taskDescription = document.createElement('p');
        const isTaskCompleted = document.createElement('p');
        taskList.appendChild(taskItem);
        taskItem.append(taskTitle, taskDescription, isTaskCompleted)
        taskTitle.textContent = `Title: ${task.title}`;
        taskDescription.textContent = `Description: ${task.description}`;
        isTaskCompleted.textContent = task.completed;
    })
}

class Task {
    constructor(title, description, completed) {
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
}

const addTaskBtn = document.querySelector('#addTask');

addTaskBtn.addEventListener('click', () => {
    const title = document.querySelector('#taskTitle').value;
    const description = document.querySelector('#taskDescription').value;
    const isCompleted = document.querySelector('#isCompleted').checked ? 'Task completed' : 'Task not completed';
    if (!title || !description) {
        alert('Please enter task info');
        return;
    }
    const task = new Task(title, description, isCompleted);
    tasks.push(task);
    displayTasks();
})

/* Task 7
Create an object `weatherApp` with a method `fetchWeather(city)`.
Use `fetch` to get weather data from an API and display it in an HTML element.
(API: OpenWeather or any free weather API)
*/

const weatherBtn = document.querySelector('#weatherBtn');
import { API_KEY } from "./config.js";

const weatherApp = {
    async fetchWeather(city) {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error.message);
        }
    }
}




const cityName = document.querySelector('#cityName');

weatherBtn.addEventListener('click', async () => {
    if (!cityName.value) {
        document.querySelector('#weatherError').textContent = 'Please enter city name';
        return;
    }

    try {
        const weatherData = await weatherApp.fetchWeather(cityName.value);
        if (!weatherData || weatherData.code === '404') {
            throw new Error('City not found');
        }

        document.querySelector('#temperature').textContent = `${(weatherData.main.temp - 273.15).toFixed()}°`;
        document.querySelector('#feelsLike').textContent = `${(weatherData.main.feels_like - 273.15).toFixed()}°`;
        document.querySelector('#weatherDescription').textContent = weatherData.weather[0].main;
        document.querySelector('#weatherIcon').setAttribute('src', `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`);
        document.querySelector('#weatherError').textContent = '';
        cityName.value = '';

    } catch (error) {
        document.querySelector('#weatherError').textContent = error.message;
    }
});

/* Task 8
Create a constructor function `Car` that takes `brand`, `model`, and `year`.
In the constructor, add a method `age()` that calculates the car’s age.
Instantiate a new `Car` and display its age on the webpage.
*/

class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    age() {
        let currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}


document.querySelector('#carAgeBtn').addEventListener('click', () => {
    const year = document.querySelector('#carYear').value;
    if (!year || parseFloat(year) < 1886 || parseFloat(year) > new Date().getFullYear())  {
        document.querySelector('#carError').textContent = 'Please enter valid year';
        return;
    }
    const car = new Car('default', 'default', year);
    const age = car.age();
    document.querySelector('#carAge').textContent = `Your car is ${age} years old`;
    document.querySelector('#carError').textContent = '';
    document.querySelector('#carYear').value = '';
})


/* Task 9
Create an array `users` where each user has `name` and `score`.
Add a button in HTML that sorts the users by score in descending order and updates the displayed list.
*/

const users = [
    {
        name: 'Alice',
        score: 56
    },
    {
        name: 'Ronald',
        score: 90
    },
    {
        name: 'Jane',
        score: 89
    },
    {
        name: 'Max',
        score: 40
    },
    {
        name: 'Harry',
        score: 100
    },
]

const userList = document.querySelector('#userList');

const displayUsers = () => {
    userList.innerHTML = '';
    users.forEach(user => {
        const userItem = document.createElement('li');
        userList.appendChild(userItem);
        userItem.textContent = `User: ${user.name}, score: ${user.score}`;
    })
}

displayUsers();

document.querySelector('#sortUsers').addEventListener('click', () => {
    users.sort((u1, u2) => u1.score - u2.score);
    displayUsers();
})


/* Task 10
Create an object `shoppingList` with an array `items`.
Add an input field and button to allow users to add new items to `items` and display the updated list.
*/

const shoppingList = {
    items: []
}

const shoppingListUl = document.querySelector('#shoppingList');

const displayShoppingItems = () => {
    shoppingListUl.innerHTML = '';
    shoppingList.items.forEach(item => {
        const shoppingItem = document.createElement('li');
        shoppingListUl.appendChild(shoppingItem);
        shoppingItem.textContent = item;
    })
}

displayShoppingItems();

document.querySelector('#shoppingListBtn').addEventListener('click', () => {
    const newItem = document.querySelector('#itemName').value;
    if (!newItem) {
        document.querySelector('#shoppingListError').textContent = "Please enter item's name";
        return;
    }
    shoppingList.items.push(newItem);
    displayShoppingItems();
    document.querySelector('#itemName').value = '';
    document.querySelector('#shoppingListError').textContent = '';
})

/* Task 11
Create an array of `posts` where each post has `title`, `content`, and `likes`.
Add a "Like" button next to each post that increases the `likes` count and updates the display.
*/

const posts = [
    {
        title: 'Solving JavaScript tasks',
        content: 'Solving JS task is cool and interesting!',
        likes: 10
    },
    {
        title: 'Learning React',
        content: 'Learning React is fun!',
        likes: 20
    },
    {
        title: 'Practicing PHP',
        content: 'Practicing PHP takes a lof of effort!',
        likes: 30
    },
    {
        title: 'Mastering Java',
        content: 'Mastering Java is unforgettable experience!',
        likes: 40
    },
]

const postsList = document.querySelector('#posts');

const displayPosts = () => {
    postsList.innerHTML = '';
    posts.forEach((post, index) => {
        const postItem = document.createElement('li');
        const postTitle = document.createElement('p');
        const postContent = document.createElement('p');
        const postLikes = document.createElement('p');
        const likeBtn = document.createElement('button');

        likeBtn.textContent = "Like";
        
        likeBtn.addEventListener('click', () => {
            posts[index].likes++; 
            displayPosts();
        });

        postItem.append(postTitle, postContent, postLikes, likeBtn);
        postsList.appendChild(postItem);

        postTitle.textContent = `Title: ${post.title}`;
        postContent.textContent = `Content: ${post.content}`;
        postLikes.textContent = `Likes: ${post.likes}`;
    })
}

displayPosts();

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