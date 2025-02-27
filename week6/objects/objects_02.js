/* Task 1
Create an object `weather` that contains properties `temperature`, `humidity`, and `condition` (e.g., "Sunny", "Rainy").
Write a function that logs `"Take an umbrella!"` if it's rainy.
*/

const weather = {
    temperature: '+25',
    humidity: '100%',
    condition: 'Rainy'
}

const isRainy = (obj) => {
    if (!obj)
        return 'Invalid data';
    if (obj.condition === 'Rainy')
        console.log("Take an umbrella!")
}

isRainy(weather);
isRainy(null);
isRainy({})

/* Task 2
Define an object named `shoppingCart` that contains an array of items.
Each item has `name`, `price`, and `quantity`.
Write a function that calculates the total price of all items in the cart.
*/

shoppingCart = [
    {
        name: 'Apple',
        price: 3,
        quantity: 1
    },
    {
        name: 'Meat',
        price: 5,
        quantity: 1
    },
    {
        name: 'Cat food',
        price: 3,
        quantity: 1
    },
    {
        name: 'Candy',
        price: 0.5,
        quantity: 10
    },
    {
        name: 'Rice',
        price: 1,
        quantity: 1
    }
]


const calculateTotal = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0)
        return ('Invalid data');
    return arr.reduce((acc, curr) => acc + curr.price, 0)
}

console.log(calculateTotal(shoppingCart));
console.log(calculateTotal(null));
console.log(calculateTotal());


/* Task 3
Create an array of objects named `restaurants`, each with properties `name`, `cuisineType`, and `rating`.
Write a function that returns only the restaurants with a rating of 4 or higher.
*/

const restaurants = [
    {
        name: 'Mac',
        cuisineType: 'Italian',
        rating: 4
    },
    {
        name: 'Hesburger',
        cuisineType: 'French',
        rating: 5
    },
    {
        name: 'Ravintola',
        cuisineType: 'Finnish',
        rating: 4
    },
    {
        name: 'Nice food',
        cuisineType: 'American',
        rating: 5
    },
    {
        name: 'Bad food',
        cuisineType: 'Mixed',
        rating: 1
    },
]

const findHighlyRatedRestaurants = (restaurants) => {
    if (!Array.isArray(restaurants) || restaurants.length === 0)
        return ('Invalid data');
    return restaurants.filter(r => r.rating >= 4);
}
console.log(findHighlyRatedRestaurants(restaurants));
console.log(findHighlyRatedRestaurants());
console.log(findHighlyRatedRestaurants(null));
console.log(findHighlyRatedRestaurants([]));


/* Task 4
Define an object named `bankAccount` with properties `accountHolder`, `balance`, and `transactions` (an array of numbers).
Write a function that calculates the total balance after all transactions.
*/

const bankAccount = {
    accountHolder: '',
    balance: 1000,
    transactions: [10, 4, 5, 6, 7, -100, 40, -3]
}

const calculateBalance = (account) => {
    if (!account || !Array.isArray(bankAccount.transactions) || bankAccount.transactions.length === 0)
        return 'invalid data';
    return bankAccount.transactions.reduce((acc, curr) => acc + curr, account.balance);
}

console.log(calculateBalance(bankAccount));
console.log(calculateBalance());
console.log(calculateBalance({}));

/* Task 5
Create an array `students` where each student has `name`, `scores` (array of numbers), and `averageScore` (initially null).
Write a function that calculates and updates each student's `averageScore`.
*/

const students = [
    {
        name: 'Anna',
        scores: [5, 3, 8, 7],
        averageScore: null
    },
    {
        name: 'Mark',
        scores: [1, 5, 3, 6],
        averageScore: null
    },
    {
        name: 'Julia',
        scores: [9, 3, 4, 6],
        averageScore: null
    },
    {
        name: 'Irina',
        scores: [2, 3, 6, 6],
        averageScore: null
    },
    {
        name: 'Pekka',
        scores: [1, 5, 6, 8],
        averageScore: null
    }
]

const calculateAverage = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0)
        return 'invalid data';
    return arr.map(s => {
        const average = s.scores.reduce((acc, cur) => acc + cur, 0) / s.scores.length;
        return {name: s.name, scores: s.scores, averageScore: average}
    })
}

console.log(calculateAverage(students));
console.log(calculateAverage());
console.log(calculateAverage([]));

/* Task 6
Define an array named `courses`, each containing `courseName`, `instructor`, and `studentsEnrolled`.
Write a function that logs the course name of any course with more than 30 students.
*/

const courses = [
    {
        courseName: 'Math',
        instructor: 'Mary',
        studentdEnrolled: 34
    },
    {
        courseName: 'Italian',
        instructor: 'John',
        studentdEnrolled: 27
    },
    {
        courseName: 'Java',
        instructor: 'Martha',
        studentdEnrolled: 24
    },
    {
        courseName: 'Python',
        instructor: 'Emily',
        studentdEnrolled: 50
    },
    {
        courseName: 'Sport',
        instructor: 'Pekka',
        studentdEnrolled: 11
    },
]

const findPopularCourses = (courses) => {
    if (!Array.isArray(courses) || courses.length === 0)
        return 'invalid data';
    return courses.filter(c => c.studentdEnrolled > 30);
}

console.log(findPopularCourses(courses));
console.log(findPopularCourses(null));
console.log(findPopularCourses([]));

/* Task 7
Create an object `pet` with properties `species`, `name`, and `isVaccinated`.
Write a function that returns `"Vaccination required"` if the pet is not vaccinated.
*/

const pet1 = {
    species: 'Cat',
    name: 'Mirri',
    isVaccinated: true
}
const pet2 = {
    species: 'Dog',
    name: 'Musti',
    isVaccinated: false
}
const isVaccinationRequired = (pet) => {
    if (!pet)
        return 'invalid data';
    if (!pet.isVaccinated)
        return 'Vaccination required';
}

console.log(isVaccinationRequired(pet1));
console.log(isVaccinationRequired(pet2));
console.log(isVaccinationRequired(null));

/* Task 8
Define an object named `city` with properties `name`, `population`, and `landmark`.
Write a function that logs `"This is a big city!"` if the population exceeds 1,000,000.
*/

const city1 = {
    name: 'Paris',
    population: 2103000,
    landmark: 'The Eiffel Tower'
}

const city2 = {
    name: 'Helsinki',
    population: 656920,
    landmark: 'Helsinki Cathedral'
}

const isBigCity = (city) => {
    if (!city || !city.population)
        return 'invalid data';
    if (city.population > 1000000)
        return 'This is a big city!';
}

console.log(isBigCity(city1))
console.log(isBigCity(city2))
console.log(isBigCity(null))
console.log(isBigCity({}))

/* Task 9
Create an array `transactions`, where each transaction is an object with `type` ("credit" or "debit") and `amount`.
Write a function that calculates the total balance after processing all transactions.
*/

const transactions = [
    {
        type: 'credit',
        amount: 10
    },
    {
        type: 'debit',
        amount: 20
    },
    {
        type: 'credit',
        amount: 10
    },
    {
        type: 'debit',
        amount: 26
    },
    {
        type: 'credit',
        amount: 100
    },
    {
        type: 'debit',
        amount: 1000
    },
]

const calculateBalance2 = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0)
        return 'invalid data'
    return arr.reduce((acc, curr) => curr.type === 'credit' ? acc + curr.amount : acc - curr.amount, 0)
}

console.log(calculateBalance2(transactions))
console.log(calculateBalance2())
console.log(calculateBalance2([]))

/* Task 10
Define an object named `foxPack` containing an array of fox objects.
Each fox has `name`, `age`, and `furColor`.
Write a function that filters out only the foxes that are younger than 2.
*/

const foxPack = [
    {
        name: 'Foxy',
        age: 4,
        furColor: 'red'
    },
    {
        name: 'Mary',
        age: 6,
        furColor: 'white'
    },
    {
        name: 'Jane',
        age: 3,
        furColor: 'black'
    },
    {
        name: 'Jack',
        age: 7,
        furColor: 'black'
    },
]

const findYoungFoxes = (foxes) => {
    if (!Array.isArray(foxes) || foxes.length === 0)
        return 'invalid data'
    return foxes.filter(f => f.age < 2);
}

findYoungFoxes([]);
findYoungFoxes(foxPack);
findYoungFoxes();
findYoungFoxes(null);
/* Task 11
Create an object `gameCharacter` with properties `name`, `level`, `health`, and `inventory` (an array).
Write a function that logs all items in the character’s inventory.
*/

const gameCharacter = {
    name: 'Neo',
    level: 1000000,
    health: 10000,
    inventory: ['black coat', 'sunglasses', 'gun']
}

const getInventory = (character) => {
    if (!character || !character.inventory)
        return 'invalid data'
    character.inventory.forEach(i => console.log(i));
}

getInventory(gameCharacter);

/* Task 12
Define an array named `employees`, where each employee has a `name`, `role`, and `workingHours`.
Write a function that finds and logs employees who work more than 40 hours.
*/

const employees = [
    {
        name: 'John',
        role: 'full stack developer',
        workingHours: 50
    },
    {
        name: 'Jane',
        role: 'backend developer',
        workingHours: 20
    },
    {
        name: 'Anna',
        role: 'designer',
        workingHours: 60
    },
    {
        name: 'Jack',
        role: 'manager',
        workingHours: 45
    },
    {
        name: 'Emily',
        role: 'devops',
        workingHours: 30
    }
]

const filterEmployees = (employees) => {
    if (!Array.isArray(employees) || employees.length === 0)
        return 'invalid data';
    console.log(employees.filter(e => e.workingHours > 50))
}

filterEmployees([]);
filterEmployees(employees);
filterEmployees();
filterEmployees(null);

/* Task 13
Create an array `musicAlbums` where each album has `title`, `artist`, and `releaseYear`.
Write a function that logs albums released after 2000.
*/

const musicAlbums = [
    {
        title: 'Album1',
        artist: 'Artist1',
        releaseYear: 2000
    },
    {
        title: 'Album2',
        artist: 'Artist2',
        releaseYear: 1999
    },
    {
        title: 'Album3',
        artist: 'Artist3',
        releaseYear: 1970
    },
    {
        title: 'Album4',
        artist: 'Artist4',
        releaseYear: 2005
    },
    {
        title: 'Album5',
        artist: 'Artist5',
        releaseYear: 2022
    },
]

const findLatest = (albums) => {
    if (!Array.isArray(albums) || albums.length === 0)
        return 'invalid data'
    return albums.filter(a => a.releaseYear > 2000);
}

console.log(findLatest(musicAlbums));
console.log(findLatest([]));
console.log(findLatest());
console.log(findLatest(null));

/* Task 14
Define an array named `cars`, each containing `brand`, `model`, and `horsepower`.
Write a function that finds and returns the car with the highest horsepower.
*/

const cars = [
    {
        brand: 'Ford',
        model: 'Mustang GT',
        horsepower: 450
    },
    {
        brand: 'Chevrolet',
        model: 'Camaro SS',
        horsepower: 455
    },
    {
        brand: 'BMW',
        model: 'M5',
        horsepower: 617
    },
]

const findCar = (cars) => {
    if (!Array.isArray(cars) || cars.length === 0)
            return 'invalid data'
    const max  = Math.max(...cars.map(c => c.year));
    return cars.find(c => c.horsepower === max);
}

console.log(findCar(cars));
console.log(findCar([]));
console.log(findCar());
console.log(findCar(null));

/* Task 15
Create an array of `airports`, where each airport has `name`, `country`, and `flightsPerDay`.
Write a function that finds the airport with the most daily flights.
*/

const airports = [
    {
        name: 'Helsinki Airport',
        country: 'Finland',
        flightsPerDay: 50
    },
    {
        name: 'Paris Airport',
        country: 'France',
        flightsPerDay: 60
    },
    {
        name: 'Milano Airport',
        country: 'Italy',
        flightsPerDay: 40
    },
    {
        name: 'Minsk Airport',
        country: 'Belarus',
        flightsPerDay: 100
    },
]

const findAiroport = (airports) => {
    if (!Array.isArray(airports) || airports.length === 0)
                return 'invalid data'
    const max  = Math.max(...airports.map(a => a.flightsPerDay));
    return airports.find(a => a.flightsPerDay === max);
}

console.log(findAiroport(airports));
console.log(findAiroport([]));
console.log(findAiroport());
console.log(findAiroport(null));

