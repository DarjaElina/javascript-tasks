/* 
Write a function named canEat:
Take two parameters: isHungry and hasFood.
If both are true, return "Time to eat!".
If either is false, return "You need to find food!"
Call the function with different combinations of isHungry and hasFood. 
*/

const canEat = (isHungry, hasFood) => {
    return (isHungry && hasFood) ? "Time to eat!" :  "You need to find food!";
};

const canEat2 = (isHungry, hasFood) => {
    if (isHungry && hasFood) {
        return "Time to eat!";
    } else return  "You need to find food!";
};

console.log(canEat(true, false));
console.log(canEat2(true, false));

console.log(canEat(false, false));
console.log(canEat2(false, false));

console.log(canEat(true, true));
console.log(canEat2(true, true));

console.log(canEat(false, true));
console.log(canEat2(false, true));