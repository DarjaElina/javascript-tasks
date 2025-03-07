const pancakeType = document.querySelector('#type');
const toppings = document.querySelectorAll('.topping');
const extras = document.querySelectorAll('.extra');
const totalPriceDisplay = document.querySelector('#totalPriceDisplay');
const totalPriceBanner = document.querySelector('#totalPrice');
const summaryText = document.querySelector('#summaryText');
const nameInput = document.querySelector('#customerName')

const closeModal = () => {
    document.querySelector('.modal').classList.add('hidden');
}
const openModal = () => {
    document.querySelector('.modal').classList.remove('hidden');
}

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

const orderSummary = document.createElement('div');

const showOrderDetails = () => {
    orderSummary.innerHTML = '';

    const customerName = nameInput.value;
    const pancakeType = document.querySelector('#type').value;
    const toppings = [...document.querySelectorAll('.topping:checked')].map(t => t.value)
    const extras = [...document.querySelectorAll('.extra:checked')].map(t => t.value)
    const deliveryMethod = document.querySelector('.delivery:checked').value;

    if (!customerName) {
        document.querySelector('#errorText').classList.remove('hidden');
        document.querySelector('#errorText').textContent = 'Please enter your name.';
        return;
    }

    const customerNameDisplay = document.createElement('p');
    const pancakeTypeDisplay = document.createElement('p');
    const toppingsDisplay = document.createElement('p');
    const extrasDisplay = document.createElement('p');
    const deliveryMethodDisplay = document.createElement('p');
    
    document.querySelector('#confirmOrder').classList.remove('hidden');
    orderSummary.append(customerNameDisplay, pancakeTypeDisplay, toppingsDisplay, extrasDisplay, deliveryMethodDisplay);

    document.querySelector('#orderSummaryContent').insertBefore(orderSummary, document.querySelector('#confirmOrder'));

    customerNameDisplay.textContent = `Customer name: ${customerName}`;
    toppingsDisplay.textContent = `Toppings: ${toppings.length > 0 ? toppings : 'Not selected'}`;
    pancakeTypeDisplay.textContent = `Pancake type: ${pancakeType}`;
    extrasDisplay.textContent = `Extras: ${extras.length > 0 ? extras : 'Not selected'}`;
    deliveryMethodDisplay.textContent = `Delivery method: ${deliveryMethod}`;

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
    const pancakeType = document.querySelector('#type').value;
    const toppings = [...document.querySelectorAll('.topping:checked')].map(t => t.value)
    const extras = [...document.querySelectorAll('.extra:checked')].map(t => t.value)
    const deliveryMethod = document.querySelector('.delivery:checked').value;
    const totalPrice = parseFloat(document.querySelector('#totalPriceDisplay').textContent);

    if (!customerName) {
        document.querySelector('#errorText').classList.remove = 'hidden';
        document.querySelector('#errorText').textContent = 'Please enter your name.';
        return;
    }

    const newOrder = new Order(id, customerName, pancakeType, toppings, extras, deliveryMethod, totalPrice);

    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    orders.push(newOrder);

    localStorage.setItem('orders', JSON.stringify(orders));


    orderSummary.textContent = '';
    document.querySelector('#errorText').classList.add('hidden');
    document.querySelector('#userMessage').classList.remove('hidden');
    document.querySelector('#confirmOrder').classList.add('hidden');
    document.querySelector('#userMessage').textContent = 'Your order has been successfully completed! 🎉 This window will close in a few seconds.';
    
    nameInput.value = '';
    setTimeout(() => {
        document.querySelector('#userMessage').classList.add('hidden');
        closeModal();
    }, 5000)

}

document.querySelector('#seeOrder').addEventListener('click', showOrderDetails);
document.querySelector('#pancakeForm').addEventListener('change', changeHandler);
document.querySelector('#confirmOrder').addEventListener('click', confirmOrder);
document.querySelector('#closeModal').addEventListener('click', closeModal);
