/* 
Write a function named calculateAverageSpeed:
- Continuously prompt the user to input distance (in kilometers) and time (in hours).
- After each input, calculate and log the average speed in the console.
- Stop asking for inputs when the user enters 0 for distance. 
*/
const calculateAverageSpeed = () => {
    let distance;
    let time;
    while (distance !== 0) {
        
        distance = +prompt('Enter distance in kilometers');
        if (distance === 0)
            break;
        time = +prompt('Enter time in hours');
        console.log(distance / time)
    }
    
}
calculateAverageSpeed();

