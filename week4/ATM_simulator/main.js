const depositBtn = document.querySelector('#deposit_btn');
const withdrawBtn = document.querySelector('#withdraw_btn');
const balanceSpan = document.querySelector('#balance');
const balanceText = document.querySelector('#balance_text');
const balanceBtn = document.querySelector('#balance_btn');
const depositInput = document.querySelector('#deposit_input');
const withdrawInput = document.querySelector('#withdraw_input');
const userMessage = document.querySelector('#user_message');

let currentBalance = 1000;
balanceSpan.innerText = `${currentBalance} $`;



const checkBalance = () => {
    balanceText.classList.toggle('hidden');
    balanceBtn.textContent = balanceText.classList.contains('hidden') ? 'Show balance' : 'Hide balance';
}

const deposit = () => {
    if (!depositInput.value || typeof +depositInput.value !== 'number') {
        userMessage.innerText = 'Please enter valid amount'
    } else {
        currentBalance += +depositInput.value;
        balanceSpan.innerText = `${currentBalance} $`;
        userMessage.innerText = 'Deposit successful'
        depositInput.value = '';
    }
}

const withdraw = () => {
    if (!withdrawInput.value || typeof +withdrawInput.value !== 'number') {
        userMessage.innerText = 'Please enter valid amount'
    } else if (+withdrawInput.value > currentBalance) {
        userMessage.innerText = 'Insufficient balance'
    } else {
        currentBalance -= +withdrawInput.value;
        balanceSpan.innerText = `${currentBalance} $`;
        userMessage.innerText = 'Withrdaw successful'
        withdrawInput.value = '';
    }
}


balanceBtn.addEventListener('click', checkBalance);
depositBtn.addEventListener('click', deposit);
withdrawBtn.addEventListener('click', withdraw);