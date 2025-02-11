// Margit's version
const pancakeType = document.querySelector('#type');
const toppings = document.querySelectorAll('.topping');
const extras = document.querySelectorAll('.extra');
const totalPriceDisplay = document.querySelector('#totalPrice');
const totalPriceBanner = document.querySelector('#totalPriceDisplay');

const calculatePrice = () => {
    let totalPrice = parseFloat(pancakeType.value);
    toppings.forEach(topping => {
        if (topping.checked) {
            totalPrice += parseFloat(topping.value)
        }
    })

    extras.forEach(extra => {
        if (extra.checked) {
            totalPrice += parseFloat(extra.value)
        }
    })

    totalPriceDisplay.textContent = `${totalPrice} €`;
    totalPriceBanner.textContent = `${totalPrice} €`;
}

pancakeType.addEventListener('change', calculatePrice);
toppings.forEach(topping => topping.addEventListener('change', calculatePrice));
extras.forEach(extra => extra.addEventListener('change', calculatePrice));