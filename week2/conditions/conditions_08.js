/*
Write a function named canVote:
Take an age as a parameter.
Return true if the age is 18 or older, otherwise false.
Print "Eligible to vote" or "Not eligible to vote" based on the result of the function. 
*/

const canVote = (age) => {
    return age >= 18;
};

const printRes = (age) => {
    canVote(age) ? console.log("Eligible to vote") : console.log("Not eligible to vote");
};

printRes(10);
printRes(20);
