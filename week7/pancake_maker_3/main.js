import { createParagraphs } from './utils.js';

const pancakeTypeInput = document.querySelector('#type');
const totalPriceDisplay = document.querySelector('#totalPriceDisplay');
const totalPriceBanner = document.querySelector('#totalPrice');
const nameInput = document.querySelector('#customerName');
const errorText = document.querySelector('#errorText');
const userMessage = document.querySelector('#userMessage');

const closeModal = () => {
    document.querySelector('.modal').classList.add('hidden');
}
const openModal = () => {
    document.querySelector('.modal').classList.remove('hidden');
}

const displayInputError = () => {
    errorText.classList.remove('hidden');
    errorText.textContent = 'Please enter your name.';
}

const changeHandler = () => {
    const basePrice = parseFloat(
        pancakeTypeInput.selectedOptions[0].dataset.price
    )

    const toppingsTotal = [...document.querySelectorAll('.topping:checked')]
    .reduce((sum, topping) => sum + parseFloat(topping.dataset.price), 0);

    const extrasTotal = [...document.querySelectorAll('.extra:checked')]
    .reduce((sum, extra) => sum + parseFloat(extra.dataset.price), 0);

    const deliveryOption = parseFloat(
        document.querySelector('.delivery:checked').dataset.price
    )

    let totalPrice = basePrice + toppingsTotal + extrasTotal + deliveryOption;

    totalPriceDisplay.textContent = `${totalPrice} €`;
    totalPriceBanner.textContent = `${totalPrice} €`;
}

const orderSummary = document.createElement('div');

const showOrderDetails = () => {
    orderSummary.textContent = '';

    const order = {
        customerName: nameInput.value,
        pancakeType: pancakeTypeInput.value,
        toppings: [...document.querySelectorAll('.topping:checked')].map(t => t.value).join(', '),
        extras: [...document.querySelectorAll('.extra:checked')].map(t => t.value).join(', '),
        deliveryMethod: document.querySelector('.delivery:checked').value,
        totalPrice: parseFloat(totalPriceDisplay.textContent)
    }

    if (!nameInput.value.trim()) {
        displayInputError();
        return;
    }

    createParagraphs(['customerName', 'pancakeType', 'toppings', 'extras', 'deliveryMethod', 'totalPrice'], order, orderSummary);
    
    document.querySelector('#confirmOrder').classList.remove('hidden');
    document.querySelector('#orderSummaryContent').insertBefore(orderSummary, document.querySelector('#confirmOrder'));

    document.querySelector('#errorText').classList.add('hidden');
    openModal();
}


class Order {
    constructor(id, customerName, pancakeType, toppings, extras, deliveryMethod, totalPrice, status = 'waiting') {
        this.id = id;
        this.customerName = customerName;
        this.pancakeType = pancakeType;
        this.toppings = toppings;
        this.extras = extras;
        this.deliveryMethod = deliveryMethod;
        this.totalPrice = totalPrice;
        this.status = status;
    }
}

const confirmOrder = () => {
    const id = Date.now().toString();
    const customerName = nameInput.value;
    const pancakeType = pancakeTypeInput.value;
    const toppings = [...document.querySelectorAll('.topping:checked')].map(t => t.value).join(', ')
    const extras = [...document.querySelectorAll('.extra:checked')].map(t => t.value).join(', ')
    const deliveryMethod = document.querySelector('.delivery:checked').value;
    const totalPrice = parseFloat(totalPriceDisplay.textContent);

    if (!customerName) {
        displayInputError();
        return;
    }

    const newOrder = new Order(id, customerName, pancakeType, toppings, extras, deliveryMethod, totalPrice);

    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    orders.push(newOrder);

    localStorage.setItem('orders', JSON.stringify(orders));

    orderSummary.textContent = '';
    document.querySelector('#errorText').classList.add('hidden');
    document.querySelector('#confirmOrder').classList.add('hidden');
    userMessage.classList.remove('hidden');
    userMessage.textContent = 'Your order has been successfully completed! 🎉 This window will close in a few seconds.';
    nameInput.value = '';

    setTimeout(() => {
        document.querySelector('#userMessage').classList.add('hidden');
        closeModal();
    }, 4000)
}

document.querySelector('#seeOrder').addEventListener('click', showOrderDetails);
document.querySelector('#pancakeForm').addEventListener('change', changeHandler);
document.querySelector('#confirmOrder').addEventListener('click', confirmOrder);
document.querySelector('#closeModal').addEventListener('click', closeModal);
