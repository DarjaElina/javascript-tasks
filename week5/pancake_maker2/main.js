const pancakeType = document.querySelector('#type');
const toppings = document.querySelectorAll('.topping');
const extras = document.querySelectorAll('.extra');
const totalPriceDisplay = document.querySelector('#totalPriceDisplay');
const totalPriceBanner = document.querySelector('#totalPrice');
const summaryText = document.querySelector('#summaryText');
const nameInput = document.querySelector('#customerName');

// const calculateTotal = () => {
//     let totalPrice = parseFloat(pancakeType.dataset.price);
//     toppings.forEach(topping => {
//         if (topping.checked) {
//             totalPrice += parseFloat(topping.dataset.price);
//         }
//     });

//     extras.forEach(extra => {
//         if (extra.checked) {
//             totalPrice += parseFloat(extra.dataset.price);
//         }
//     });

//     totalPriceDisplay.textContent = `${totalPrice}€`;
//     totalPriceBanner.textContent = `${totalPrice}€`;
// };

// pancakeType.addEventListener('change', calculateTotal);
// toppings.forEach(topping => topping.addEventListener('change', calculateTotal));
// extras.forEach(extra => extra.addEventListener('change', calculateTotal));

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