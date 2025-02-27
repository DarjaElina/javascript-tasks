/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`.
Add at least two book objects to this collection.
*/
const library = [
    {
        title: 'Crime and Punishment',
        author: 'Fyodor Dostoevsky',
        yearPublished: 1866
    },
    {
        title: 'The Shining',
        author: 'Stephen King',
        yearPublished: 1977
    }
]

/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

console.log(library[0].title);
library[1].yearPublished = 1900;
console.log(library);

/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

library[0].genres = ['novel', 'crime fiction', 'philosophical fiction'];
library[1]['isAvailable'] = true;

console.log(library);

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

// with class syntax
// class Book {
//     constructor(title, author, yearPublished, genres) {
//         this.title = title;
//         this.author = author;
//         this.yearPublished = yearPublished;
//         this.genres = genres;
//     }
// }

// const newBook = new Book('1984', 'George Orwell', 1949, ['science finction', 'political fiction', 'social science fiction']);

// console.log(newBook);

// library.push(newBook),
// console.log(library);

// with constructor function
function Book(title, author, yearPublished, genres) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.genres = genres;
}

const newBook = new Book('1984', 'George Orwell', 1949, ['science finction', 'political fiction', 'social science fiction']);

console.log(newBook);

library.push(newBook),
console.log(library);

/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

const createBook = (title, author, yearPublished, genres) => {
    return {
        title,
        author,
        yearPublished,
        genres
    }
}

const newBook2 = createBook('Java For Dummies', 'Barry A. Burd', 2006, ['Programming', 'Non-fiction', 'Computer Science']);

console.log(newBook2);

/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/

const stringifiedLibrary = JSON.stringify(library);
console.log(stringifiedLibrary);

const parsedLibrary = JSON.parse(stringifiedLibrary);
console.log(parsedLibrary);

/* Task 7
Create an array named `students`, where each student has a `name`, `age`, and `grade`.
Log the name of any student who has a grade higher than 90.
*/

const students = [
    {
        name: 'Jane',
        age: 18,
        grade: 90
    },
    {
        name: 'Mark',
        age: 17,
        grade: 80
    },
    {
        name: 'Anna',
        age: 20,
        grade: 68
    },
    {
        name: 'Tom',
        age: 16,
        grade: 95
    },
    {
        name: 'Beth',
        age: 19,
        grade: 100
    },
    {
        name: 'Alina',
        age: 22,
        grade: 89
    }
]

console.log(students.filter(s => s.grade > 90));

/* Task 8
Define an object named `car` with properties for `brand`, `model`, `year`, and `isElectric`.
Use a function to check if the car is electric. If it is, log `"This car is eco-friendly!"`. Otherwise, log `"This car runs on fuel."`
*/

const car = {
    brand: "Volvo",
    model: "XC40 Recharge",
    year: 2023,
    isElectric: true
};

const isElectric = (obj) => {
    if (!obj)
        return;
    obj.isElectric ? console.log("This car is eco-friendly!") : console.log("This car runs on fuel.");
}

isElectric(car);
isElectric();
isElectric(null);

/* Task 9
Create a `movies` array where each movie is an object with properties for `title`, `director`, and `rating`.
Write a loop that logs all movie titles with a rating higher than 8.
*/

const movies = [
    {
        title: 'Titanic',
        director: 'James Cameron',
        rating: 7.9
    },
    {
        title: 'Scary Movie',
        director: 'Keenen Ivory Wayans',
        rating: 6.3
    },
    {
        title: 'The Green Mile',
        director: 'Frank Darabont',
        rating: 8.6
    },
    {
        title: 'The Silence of the Lambs',
        director: 'Jonathan Demme',
        rating: 8.6
    }
]

console.log(movies.filter(m => m.rating > 8));

/* Task 10
Write a function `findOldestCar` that takes an array of car objects and returns the car with the earliest `year`.
*/

// will return the first one found
const findOldestCar = (cars) => {
    if (!Array.isArray(cars)) {
        return 'Invalid data';
    }
    const earliest  = Math.min(...cars.map(c => c.year));
    return cars.find(c => c.year === earliest);
}

// if there are more than one will return an array of those
const findOldestCar2 = (cars) => {
    if (!cars || cars.length === 0) {
        return 'Invalid data';
    }
    const earliest  = Math.min(...cars.map(c => c.year));
    return cars.filter(c => c.year === earliest);
}

const cars = [
    {
        name: 'Car1',
        year: 1999
    },
    {
        name: 'Car2',
        year: 2000
    },
    {
        name: 'Car3',
        year: 1970
    },
    {
        name: 'Car4',
        year: 1985
    },
    {
        name: 'Car5',
        year: 2003
    },
    {
        name: 'Car6',
        year: 2007
    }
]

console.log(findOldestCar(cars));
console.log(findOldestCar());
console.log(findOldestCar([]));

console.log(findOldestCar2(cars));
console.log(findOldestCar2());
console.log(findOldestCar2([]));

/* Task 11
Define a `userProfiles` array containing objects representing users.
Each user should have a `username`, `email`, and `isAdmin` property.
Write a function that filters and returns only the users who are administrators.
*/

const userProfiles = [
    {
        username: 'delina',
        email: 'daria.elina@example.com',
        isAdmin: true
    },
    {
        username: 'asmith',
        email: 'anna.smith@example.com',
        isAdmin: false
    },
    {
        username: 'jdoe',
        email: 'john.doe@example.com',
        isAdmin: false
    },
    {
        username: 'ivernik',
        email: 'igor.vernik@example.com',
        isAdmin: true
    }
]

const findAdmins = (arr) => {
    if (!Array.isArray(arr)) {
        return 'invalid data'
    }
    return arr.filter(u => u.isAdmin)
}

console.log(findAdmins(userProfiles));
console.log(findAdmins([]));
console.log(findAdmins(null));
console.log(findAdmins());

/* Task 12
Define an array named `orders`, where each order contains `orderId`, `customerName`, `totalAmount`, and `status` (either "pending" or "completed").
Write a function that returns only the completed orders.
*/

const orders = [
    {
        orderId: '1',
        customerName: 'Anna',
        totalAmount: 20,
        status: 'pending'
    },
    {
        orderId: '2',
        customerName: 'Daria',
        totalAmount: 15,
        status: 'pending'
    },
    {
        orderId: '3',
        customerName: 'Max',
        totalAmount: 10,
        status: 'pending'
    },
    {
        orderId: '4',
        customerName: 'Carl',
        totalAmount: 55,
        status: 'completed'
    },
    {
        orderId: '5',
        customerName: 'Merit',
        totalAmount: 11,
        status: 'completed'
    }
]

const findCompletedOrders = (arr) => {
    if (!Array.isArray(arr)) {
        return 'invalid data'
    }
    return arr.filter(o => o.status === 'completed');
}

findCompletedOrders(orders);
findCompletedOrders([]);
findCompletedOrders(null);
findCompletedOrders();

/* Task 13
Create an object named `smartphone` with properties for `brand`, `model`, `batteryLife`, and `is5GEnabled`.
Write a function that logs `"This phone supports 5G!"` if `is5GEnabled` is `true`, otherwise logs `"This phone does not support 5G."`
*/

const smartphone = {
    brand: 'iphone',
    model: 'ES',
    batteryLife: '24 hours',
    is5GEnabled: true
}

const is5GEnabled = (obj) => {
    if (!obj || typeof obj !== 'object')
        return 'Invalid data';
    obj.is5GEnabled ? console.log("This phone supports 5G!") : console.log("This phone does not support 5G.");
}

is5GEnabled(smartphone);
is5GEnabled(null);

/* Task 14
Define an object named `fox` with properties `name`, `age`, and `habitat`.
Write a function that logs `"This fox is young"` if its age is under 3, `"This fox is an adult"` if 3 or older.
*/

const fox = {
    name: 'Foxy',
    age: 5,
    habitat: 'forest'
}

const isYoung = (fox) => {
    if (!fox || typeof fox !== 'object')
        return 'Invalid data';
    fox.age < 3 ? console.log("This fox is young") : console.log("This fox is an adult");
}

isYoung(fox);
isYoung(null);
isYoung(10);

/* Task 15
Define an array named `employees`, where each employee has `name`, `position`, and `salary`.
Write a function that calculates the total salary of all employees in the company.
*/

const employees = [
    {
        name: 'John',
        position: 'full stack developer',
        salary: 2000
    },
    {
        name: 'Jane',
        position: 'backend developer',
        salary: 2000
    },
    {
        name: 'Anna',
        position: 'designer',
        salary: 2000
    },
    {
        name: 'Jack',
        position: 'manager',
        salary: 2000
    },
    {
        name: 'Emily',
        position: 'devops',
        salary: 2000
    }
]

const calculateSalary = (arr) => {
    if (!Array.isArray(arr))
        return ('Invalid data');
    return arr.reduce((acc, curr) => acc + curr.salary, 0)
}

console.log(calculateSalary(employees));
console.log(calculateSalary(null));
console.log(calculateSalary([]));