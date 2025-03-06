/* Task 1
Create a JavaScript object named `student` with properties:
- `name`
- `age`
- `grade`
Convert the object into a JSON string and log it to the console.
*/

const student = {
    name: 'Jane Doe',
    age: 20,
    grade: 10
}

const jsonStudent = JSON.stringify(student);
console.log(jsonStudent);

/* Task 2
Take the JSON string from Task 1 and convert it back into a JavaScript object.
Log the `name` property of the converted object.
*/

const parsedStudent = JSON.parse(jsonStudent);
console.log(parsedStudent.name);

/* Task 3
Create an array named `classroom`, where each element is an object representing a student.
Each student object should have properties for `name`, `age`, and `grade`.
Convert the array into a JSON string and log it to the console.
*/

const classroom = [
    { 
        name: 'Jane Doe',
        age: 20,
        grade: 10
    },
    { 
        name: 'John Doe',
        age: 25,
        grade: 9
    },
    { 
        name: 'Anna Smith',
        age: 19,
        grade: 12
    },
]

const jsonClassroom = JSON.stringify(classroom);
console.log(jsonClassroom);

/* Task 4
Take the JSON string from Task 3, convert it back into a JavaScript array,
and log the names of all students in the classroom.
*/

const parsedClassroom = JSON.parse(jsonClassroom);
parsedClassroom.forEach(s => console.log(s.name));

/* Task 5
Create an object named `weatherReport` with the following properties:
- `temperature`
- `humidity`
- `conditions` (e.g., "Sunny", "Rainy")

Convert the object into a JSON string and store it in a variable named `weatherJSON`.
Then, parse the JSON string back into an object and log the `conditions` property.
*/

const weatherReport = {
    temperature: 10,
    humidity: '100%',
    conditions: 'Sunny'
}

const weatherJSON = JSON.stringify(weatherReport);
const parsedWeather = JSON.parse(weatherJSON);
console.log(parsedWeather.conditions);

/* Task 6
Define an array named `movies`, where each movie has:
- `title`
- `director`
- `rating`

Convert this array into a JSON string, then parse it back into a JavaScript object.
Log all movie titles with a rating higher than 8.
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

const jsonMovies = JSON.stringify(movies);
const parsedMovies = JSON.parse(jsonMovies);
console.log(parsedMovies.filter(m => m.rating > 8));

/* Task 7
Write a function `filterHighRatedMovies(jsonString)` that:
- Takes a JSON string representing an array of movie objects.
- Converts it into a JavaScript array.
- Returns a new array containing only movies with a rating higher than 8.
*/

const filterHighRatedMovies = (jsonString) => {
    const array = JSON.parse(jsonString);
    return array.filter(i => i.rating > 8);
}


console.log(filterHighRatedMovies(jsonMovies));

/* Task 8
Define an object named `shoppingCart` with:
- `items` (an array of product objects, each with `name` and `price`)
Convert `shoppingCart` into a JSON string and log it to the console.
*/

const shoppingCart = {
    items: [
        {
            name: 'apple',
            price: 2
        },
        {
            name: 'ice cream',
            price: 3
        },
        {
            name: 'cat food',
            price: 5
        },
    ]
}

console.log(JSON.stringify(shoppingCart));

/* Task 9
Write a function `totalCartValue(jsonString)` that:
- Takes a JSON string representing a shopping cart.
- Converts it into a JavaScript object.
- Returns the total price of all items in the cart.
*/

const totalCartValue = (jsonString) => {
    const obj = JSON.parse(jsonString);
    return obj.items.reduce((acc, curr) => acc + curr.price, 0);
}

console.log(totalCartValue(JSON.stringify(shoppingCart)));

/* Task 10
Create an object named `gameProgress` with:
- `level`
- `score`
- `livesRemaining`

Convert the object into a JSON string and log it.
Parse the JSON back into an object and update the `score` property by adding 100 points.
Log the updated object.
*/

let gameProgress = {
    level: 10,
    score: 50,
    livesRemaining: 2
}

gameProgress = JSON.stringify(gameProgress);
gameProgress = JSON.parse(gameProgress);
gameProgress.score += 100;
console.log(gameProgress);