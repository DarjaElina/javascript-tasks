const getRandomInt = (min, max) => {  
return Math.floor(Math.random() * (max - min + 1) + min);
};
const random = getRandomInt(1, 8);
const box = document.getElementById('answer');
const magic8Ball = (random) => {
    const answer = document.getElementById('answer');
    const question = document.getElementById('user-input').value;
    if (question) {
        switch (random) {
            case 1:
                answer.innerText = "Yes, definitely!";
                break;
            case 2:
                answer.innerText = "It is certain";
                break;
            case 3:
                answer.innerText = "Reply hazy, try again.";
                break;
            case 4:
                answer.innerText = "Ask again later.";
                break;
            case 5:
                answer.innerText = "Better not tell you now.";
                break;
            case 6:
                answer.innerText = "My sources say no.";
                break;
            case 7:
                answer.innerText = "Outlook not so good.";
                break;
            case 8:
                answer.innerText = "Signs point to yes.";
                break;
            default: return '';
        };
    }
};

const button = document.getElementById('submit-button');
button.addEventListener('click', () => magic8Ball(random));
