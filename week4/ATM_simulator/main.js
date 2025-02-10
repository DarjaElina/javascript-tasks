const depositBtn = document.querySelector('#deposit_btn');
const withdrawBtn = document.querySelector('#withdraw_btn');
const balanceSpan = document.querySelector('#balance');
const balanceText = document.querySelector('#balance_text');
const balanceBtn = document.querySelector('#balance_btn');
const depositInput = document.querySelector('#deposit_input');
const withdrawInput = document.querySelector('#withdraw_input');
const userMessage = document.querySelector('#user_message');

let currentBalance = 1000;
balanceSpan.innerText = `${currentBalance.toFixed(2)} $`;

const checkBalance = () => {
    balanceText.classList.toggle('hidden');
    balanceBtn.textContent = balanceText.classList.contains('hidden') ? 'Show balance' : 'Hide balance';
};

const showMessage = (message, isError = false) => {
    userMessage.textContent = message;
    userMessage.style.color = isError ? 'red' : 'green';
}

const deposit = () => {
    const amount = parseFloat(depositInput.value);
    if (!amount || isNaN(amount) || amount <= 0) {
        showMessage('Please enter valid amount', true);
        return;
    }
    currentBalance += amount;
    balanceSpan.innerText = `${currentBalance.toFixed(2)} $`;
    showMessage('Deposit successful');
    depositInput.value = '';
}

const withdraw = () => {
    const amount = parseFloat(withdrawInput.value);
    if (!amount || isNaN(amount) || amount <= 0) {
        showMessage('Please enter valid amount', true);
        return;
    } 
    if (amount > currentBalance) {
        showMessage('Insufficient balance', true);
        return;
    }
    currentBalance -= amount;
    balanceSpan.innerText = `${currentBalance.toFixed(2)} $`;
    showMessage('Withdrawal successful');
    withdrawInput.value = '';
}


balanceBtn.addEventListener('click', checkBalance);
depositBtn.addEventListener('click', deposit);
withdrawBtn.addEventListener('click', withdraw);