/* 
Write a function named logEvenNumbers:
- Use a loop to display all even numbers less than 100 in the pattern: 2, 98, 4, 96, ..., 50.
Display all numbers in a single line in the console.; 
*/

const logEvenNumbers = () => {
    let i = 2;
    let j = 98;
    while (i < 100) {
        if (i % 2 === 0) {
            console.log(i)
        }
        while (j >= 0) {
            if (i % 2 === 0) {
                console.log(j)
            }
            j--;
            break;
        }
        i++;
    }
};

const logEvenNumbers2 = () => {
    for (let i = 2; i < 100; i++) {
        if (i % 2 === 0) {
            console.log(i, 100 - i)
        }
        
    }
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
}
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}

//logEvenNumbers();
logEvenNumbers2();