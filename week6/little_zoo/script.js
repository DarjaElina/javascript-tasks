// Margit's version
const animalList = document.querySelector('#animalList');
const addAnimalBtn = document.querySelector('#addAnimal');
const searchInput = document.querySelector('#searchAnimal');
const sortAnimalsBtn = document.querySelector('#sortAnimals');

// VERSION WITH ANIMALS SIMPLE

// const animalsSimple = [
//     "Fox",
//     "Eagle",
//     "Cat",
//     "Cow",
//     "Frog",
// ]

// const displayAnimals = (animalArray) => {
//     // will clean the ul on page load
//     animalList.innerHTML = '';

//     // loop through animalsSimple array
//     for (const animal of animalArray) {
//         const li = document.createElement('li');
//         li.textContent = `${animal}`;
//         animalList.appendChild(li);
//     }
// }

// const addAnimal = () => {
//     // we declare nameInput INSIDE the function (local var) bc this is the only place where we need it
//     // BEST PRACTISES: PREFER LOCAL WHERE YOU CAN

//     // PROTECT WITH TRIM()
//     const nameInput = document.querySelector('#newAnimalName').value.trim();
//     animalsSimple.push(nameInput);
//     displayAnimals(animalsSimple);
//     document.querySelector('#newAnimalName').value = '';
// }

// const searchAnimal = () => {
//     const searchText = searchInput.value.toLowerCase();
//     const filteredAnimals = animalsSimple.filter(animal => animal.toLowerCase().includes(searchText));

//     displayAnimals(filteredAnimals);
// }

// const sortAnimals = () => {
//     animalsSimple.sort();
//     displayAnimals(animalsSimple);
// }

// addAnimalBtn.addEventListener('click', addAnimal);
// searchInput.addEventListener('input', searchAnimal);
// sortAnimalsBtn.addEventListener('click', sortAnimals);

// displayAnimals(animalsSimple);

// VERSION WITH OBJECT ANIMALS

const filterType = document.querySelector('#filterType');

const animals = [
    {
        name: "Fox",
        type: "Mammal",
        color: 'red',
        age: 3
    },
    {
        name: "Eagle",
        type: "Bird",
        color: 'black',
        age: 4
    },
    {
        name: "Cat",
        type: "Mammal",
        color: 'white',
        age: 5
    },
    {
        name: "Cow",
        type: "Mammal",
        color: 'brown',
        age: 6
    },
    {
        name: "Frog",
        type: "Amphibian",
        color: 'green',
        age: 7
    },
    {
        name: "Parrot",
        type: "Bird",
        color: "rainbow",
        age: 2,
    },
    {
        name: "Otter",
        type: "Mammal",
        color: "brown",
        age: 4,
    },
    {
        name: "Turtle",
        type: "Reptile",
        color: "green",
        age: 100,
    },
    {
        name: "Penguin",
        type: "Bird",
        color: "black & white",
        age: 8,
    },
    {
        name: "Chameleon",
        type: "Reptile",
        color: "varies",
        age: 5,
    }
]


const displayAnimals = (animalArray) => {
    // will clean the ul on page load
    animalList.innerHTML = '';

    // loop through animalsSimple array
    for (const animal of animalArray) {
        const li = document.createElement('li');
        const div = document.createElement('div');
        li.appendChild(div);
        div.textContent = `${animal.name}, ${animal.type}, ${animal.age} years old, ${animal.color}`;
        animalList.appendChild(li);
    }
}

const addAnimal = () => {
    const nameInput = document.querySelector('#newAnimalName').value.trim();
    const type = document.querySelector('#newAnimalType').value;
    animals.push({ name: nameInput, type, color: 'default color', age: 'default age' });
    displayAnimals(animals);
    document.querySelector('#newAnimalName').value = '';
}

const searchAnimal = () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredAnimals = animals.filter(animal => animal.name.toLowerCase().includes(searchText));

    displayAnimals(filteredAnimals);
}

const filterAnimalsByType = () => {
    const selectedType = filterType.value;
    if (selectedType === 'All')
        displayAnimals(animals);
    else {
        const filteredAnimals = animals.filter(animal => animal.type === selectedType);
        displayAnimals(filteredAnimals);
    }
    
}

const sortAnimals = () => {
    animals.sort((animal1, animal2) => animal1.name.localeCompare(animal2.name));
    displayAnimals(animals);
}

addAnimalBtn.addEventListener('click', addAnimal);
searchInput.addEventListener('input', searchAnimal);
sortAnimalsBtn.addEventListener('click', sortAnimals);
filterType.addEventListener('change', filterAnimalsByType);

displayAnimals(animals);