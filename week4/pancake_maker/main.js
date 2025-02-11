const type = document.querySelector('#type');
const toppings = document.querySelectorAll('.topping');
const extras = document.querySelectorAll('.extra');
const totalPriceDisplay = document.querySelector('#totalPriceDisplay');
const totalPriceSpan = document.querySelector('#totalPrice');

const calculatePrice = () => {
    let totalPrice = parseFloat(type.value);

    for (const topping of toppings) {
        if (topping.checked) {
            totalPrice += parseFloat(topping.value);
        }
    }

    for (const extra of extras) {
        if (extra.checked) {
            totalPrice += parseFloat(extra.value);
        }
    }

    updateUI(totalPrice);
};

const updateUI = (price) => {
    totalPriceDisplay.textContent = `${price} €`;
    totalPriceSpan.textContent = `${price} €`;
    document.querySelector(".price-banner").animate(
        [
            { transform: 'scale(1)', backgroundColor: '#C9184A' },
            { transform: 'scale(1.1)', backgroundColor: '#FF758F'},
            { transform: 'scale(1)', backgroundColor: '#C9184A' }
        ], {
            duration: 3000,
            iterations: 1
        }
    );
}

type.addEventListener('change', calculatePrice);
toppings.forEach(topping => topping.addEventListener('change', calculatePrice));
extras.forEach(extra => extra.addEventListener('change', calculatePrice));
