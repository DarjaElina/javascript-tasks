const animalList = document.querySelector('#animalList');
const searchbar = document.querySelector('#searchAnimal');
const newAnimalName = document.querySelector('#newAnimalName');
const newAnimalType = document.querySelector('#filterType');
const newAnimalBtn = document.querySelector('#addAnimal');
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

animals.forEach(a => {
    const animalItem = document.createElement('li');
    animalList.appendChild(animalItem);
    animalItem.textContent = a.name;
})

const searchAnimalByName = (e) => {
    animals.filter(a => a.name.toLowerCase().includes(e.target.value.toLowerCase()));
    const animalItems = document.querySelectorAll('li');
    for (const animalItem of animalItems) {
        if (!animalItem.textContent.toLowerCase().includes(e.target.value.toLowerCase()))
        {
            animalList.removeChild(animalItem);
            animalItem.textContent = '';
        }
    }
}


searchbar.addEventListener('input', searchAnimalByName)

newAnimalBtn.addEventListener('click', () => {
    if (!newAnimalName.value) {
        console.log('nope')
        return;
    }
    animals.push({ name: newAnimalName.value })
    const animalItem = document.createElement('li');
    animalList.appendChild(animalItem);
    animalItem.textContent = newAnimalName.value;
})