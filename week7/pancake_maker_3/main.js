const pancakeType = document.querySelector('#type');
const toppings = document.querySelectorAll('.topping');
const extras = document.querySelectorAll('.extra');
const totalPriceDisplay = document.querySelector('#totalPriceDisplay');
const totalPriceBanner = document.querySelector('#totalPrice');
const summaryText = document.querySelector('#summaryText');
const nameInput = document.querySelector('#customerName');

const changeHandler = (event) => {
    const basePrice = parseFloat(
        document.querySelector('#type').selectedOptions[0].dataset.price
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

const showOrderDetails = () => {
    const customerName = nameInput.value;
    const pancakeType = document.querySelector('#type').selectedOptions[0].textContent;
    const toppings = [...document.querySelectorAll('.topping:checked')].map(t => t.parentNode.textContent.trim()).join(', ')
    const extras = [...document.querySelectorAll('.extra:checked')].map(t => t.parentNode.textContent.trim())
    const deliveryMethod =  document.querySelector('.delivery:checked').parentNode.textContent;

    if (!customerName) {
        document.querySelector('#error-text').textContent = 'Please enter your name first.'
        return;
    } else document.querySelector('#error-text').textContent = ''

    document.querySelector('#summary-text-name').textContent = `Customer name: ${customerName}`;

    document.querySelector('#summary-text-toppings').textContent = ` Toppings: ${toppings.length > 0 ? toppings : 'Not selected'}`;

    document.querySelector('#summary-text-type').textContent = `Pancake type: ${pancakeType}`;

    document.querySelector('#summary-text-extras').textContent = `Extras: ${extras.length > 0 ? extras : 'Not selected'}`;

    document.querySelector('#summary-text-delivery').textContent = `Delivery method: ${deliveryMethod}`
}

const form = document.querySelector('#pancakeForm');
const showOrderBtn = document.querySelector('#seeOrder');
form.addEventListener('change', changeHandler);
showOrderBtn.addEventListener('click', showOrderDetails);

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
    const pancakeType = document.querySelector('#type').value;
    const toppings = [...document.querySelectorAll('.topping:checked')].map(t => t.value)
    const extras = [...document.querySelectorAll('.extra:checked')].map(t => t.value)
    const deliveryMethod =  document.querySelector('.delivery:checked').value;
    const totalPrice = parseFloat(document.querySelector('#totalPriceDisplay').textContent);

    if (!customerName) {
        document.querySelector('#error-text').textContent = 'Please enter your name first.'
        return;
    }

    const newOrder = new Order(id, customerName, pancakeType, toppings, extras, deliveryMethod, totalPrice);

    const orders = JSON.parse(localStorage.getItem('orders')) ? JSON.parse(localStorage.getItem('orders')) : [];

    orders.push(newOrder);

    localStorage.setItem('orders', JSON.stringify(orders));

}

document.querySelector('#confirmOrder').addEventListener('click', confirmOrder);
