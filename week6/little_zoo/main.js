const animalList = document.querySelector('#animalList');
const searchbar = document.querySelector('#searchAnimal');
const newAnimalName = document.querySelector('#newAnimalName');
const newAnimalBtn = document.querySelector('#addAnimal');
const errorMessage = document.querySelector('#errorMessage');
const sortBtn = document.querySelector('#sortAnimals');
const filterType = document.querySelector('#filterType');
let animals = [
    {
        name: "Fox",
        type: "Mammal"
    },
    {
        name: "Eagle",
        type: "Bird"
    },
    {
        name: "Cat",
        type: "Mammal"
    },
    {
        name: "Cow",
        type: "Mammal"
    },
    {
        name: "Frog",
        type: "Amphibian"
    }
]

const capitalizeFirstLetter = (string) => {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
}

const setAnimalTypeAndName = (animal, type, name) => {
    animal.textContent = name;
    animal.dataset.type = type;
}

animals.forEach(a => {
    const animalItem = document.createElement('li');
    animalList.appendChild(animalItem);
    setAnimalTypeAndName(animalItem, a.type, a.name);
});

const searchAnimal = (e) => {
    const animalItems = document.querySelectorAll('li');
    const type = document.querySelector('#filterType').selectedOptions[0].value;
    const searchQuery = e.target.value.toLowerCase();
    console.log(type, searchQuery)
    for (const animalItem of animalItems) {
        if (!animalItem.textContent.toLowerCase().includes(searchQuery) && (animalItem.dataset.type !== type && type !== 'All'))
            animalItem.style.display = 'none';
        else 
            animalItem.style.display = 'flex';
    }
}

const addAnimal = () => {
    const name = newAnimalName.value;
    if (!name || name.length < 3) {
        errorMessage.textContent = "Please enter valid animal's name";
        return;
    }
    const type = document.querySelector('#newAnimalType').selectedOptions[0].value;
    const capitalizedAnimalName = capitalizeFirstLetter(name);
    animals.push({ name, type })
    const animalItem = document.createElement('li');
    animalList.appendChild(animalItem);
    setAnimalTypeAndName(animalItem, type, capitalizedAnimalName);
    newAnimalName.value = '';
    errorMessage.textContent = '';
}

const sortAnimals = () => {
    let sortedAnimals = animals.sort((a, b) => a.name.localeCompare(b.name))
    const animalItems = document.querySelectorAll('li');
    animalItems.forEach((animalItem, index) => animalItem.textContent = sortedAnimals[index].name);
}


searchbar.addEventListener('input', searchAnimal)

newAnimalBtn.addEventListener('click', addAnimal);

sortBtn.addEventListener('click', sortAnimals);

filterType.addEventListener('change', searchAnimal);