/* Task 1
Store a string `"Hello, LocalStorage!"` in LocalStorage under the key `"message"`.
Retrieve it and log it to the console.
*/

localStorage.setItem('message', 'Hello, LocalStorage!');
const message = localStorage.getItem('message');
console.log(message);

/* Task 2
Create an object `userSettings` with:
- `theme` ("dark" or "light")
- `language` ("English", "Spanish", etc.)

Convert it to a JSON string and store it in LocalStorage.
Retrieve it, parse it, and log the `theme` property.
*/

const userSettings = {
    theme: 'dark',
    language: 'Spanish'
}

localStorage.setItem('settings', JSON.stringify(userSettings));

const settings =JSON.parse(localStorage.getItem('settings'));
console.log(settings.theme);

/* Task 3
Define an array `favoriteBooks` with at least three book objects (`title` and `author`).
Store the array in LocalStorage.
Retrieve and parse it, then log the titles of all books.
*/

const favoriteBooks = [
    {
        title: 'Crime and Punishment',
        author: 'Fyodor Dostoevsky',
    },
    {
        title: 'The Shining',
        author: 'Stephen King',
    },
    {
        title: '1984',
        author: 'George Orwell'
    }
]

localStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks));
const books = JSON.parse(localStorage.getItem('favoriteBooks'));
books.forEach(b => console.log(b.title));

/* Task 4
Write a function `saveToLocalStorage(key, object)` that:
- Converts an object to JSON.
- Stores it in LocalStorage under the provided key.
Test it by saving an object and retrieving it.
*/

const saveToLocalStorage = (key, object) => {
    const json = JSON.stringify(object);
    localStorage.setItem(key, json);
};

saveToLocalStorage('cat', {name: 'Mirri', color: 'black'});

const cat = JSON.parse(localStorage.getItem('cat'));
console.log(cat);

/* Task 5
Write a function `getFromLocalStorage(key)` that:
- Retrieves a value from LocalStorage.
- Parses it if it's JSON.
- Logs the retrieved value.
*/

const isValidJSON = str => {
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
};

const getFromLocalStorage = (key) => {
    const value = localStorage.getItem(key);
    if (isValidJSON(value)) {
        console.log(JSON.parse(value));
        return;
    }
    console.log(value);
}

getFromLocalStorage('cat');
getFromLocalStorage('message');

/* Task 6
Create an object `userProfile` with:
- `username`
- `email`
- `preferences` (an object with `theme` and `notifications`)

Save it to LocalStorage.
Retrieve and update the `theme` property to `"dark mode"`, then log the updated object.
*/

const userProfile = {
    username: 'delina',
    email: 'daria.elina@example.com',
    preferences: {
        theme: 'light mode',
        notifications: true
    }
}

localStorage.setItem('user', JSON.stringify(userProfile));

const profile = JSON.parse(localStorage.getItem('user'));
profile.preferences.theme = 'dark mode';

console.log(profile);

/* Task 7
Define an object `shoppingList` with an array `items` (strings).
Save it to LocalStorage.
Write a function `addItemToList(item)` that:
- Retrieves `shoppingList` from LocalStorage.
- Adds a new item.
- Saves the updated list back to LocalStorage.
- Logs the updated list.
*/

const shoppingList = {
    items: ['apple', 'cat food', 'tomato']
}

localStorage.setItem('shoppingList', JSON.stringify(shoppingList));

const addItemToList = (item) => {
    const updatedList = JSON.parse(localStorage.getItem('shoppingList'));
    console.log(updatedList);
    updatedList.items.push(item);
    localStorage.setItem('shoppingList', JSON.stringify(updatedList));
    console.log(updatedList.items);
}

addItemToList('ice cream');

/* Task 8
Create a counter object with:
- `count` (starting at 0)
Store it in LocalStorage.
Write a function `incrementCounter()` that:
- Retrieves the counter.
- Increases `count` by 1.
- Saves the updated counter.
- Logs the new count.
*/

const counter = {
    count: 0
}

localStorage.setItem('counter', JSON.stringify(counter));

const incrementCounter = () => {
    const updatedCounter = JSON.parse(localStorage.getItem('counter'));
    updatedCounter.count++;
    localStorage.setItem('counter', updatedCounter);
    console.log(updatedCounter.count);
}

incrementCounter();

/* Task 9
Create an array `tasks`, where each task is an object (`id`, `description`, `completed`).
Save it to LocalStorage.
Write a function `markTaskComplete(taskId)` that:
- Retrieves `tasks` from LocalStorage.
- Finds the task with the given ID and sets `completed` to `true`.
- Saves the updated tasks.
- Logs the updated list.
*/

const tasks = [
    {
        id: '1',
        description: 'Task 1',
        completed: true
    },
    {
        id: '2',
        description: 'Task 1',
        completed: false
    },
    {
        id: '3',
        description: 'Task 1',
        completed: true
    },
    {
        id: '4',
        description: 'Task 1',
        completed: false
    },
    {
        id: '5',
        description: 'Task 1',
        completed: false
    }
]

localStorage.setItem('tasks', JSON.stringify(tasks));

const markTaskComplete = (taskId) => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    const updatedTasks = storedTasks.map(t => t.id === taskId ? {...t, completed: true} : t);
    localStorage.setItem('tasks', updatedTasks);
    console.log(updatedTasks);
}

markTaskComplete('5');

/* Task 10
Write a function `clearLocalStorage()` that removes all data stored in LocalStorage.
Call it and confirm LocalStorage is empty.
*/

const clearLocalStorage = () => {
    localStorage.clear();
}

clearLocalStorage();

console.log(localStorage.getItem('tasks'));