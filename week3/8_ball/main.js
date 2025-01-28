const getRandomInt = (min, max) => {  
return Math.floor(Math.random() * (max - min + 1) + min);
};
const random = getRandomInt(1, 8);
const question = prompt('Ask me something');
console.log(question);
const magic8Ball = (random) => {
    switch (random) {
        case 1:
            return "Yes, definitely!";
        case 2:
            return "It is certain.";
        case 3:
            return "Reply hazy, try again.";
        case 4:
            return "Ask again later.";
        case 5:
            return "Better not tell you now.";
        case 6:
            return "My sources say no.";
        case 7:
            return "Outlook not so good.";
        case 8:
            return "Signs point to yes.";
    };
};

if (question) {
    const res = magic8Ball(random);
    console.log(res);
    alert(res);
};


