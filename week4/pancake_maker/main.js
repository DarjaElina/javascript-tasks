const type = document.querySelector('#type');
const toppings = document.querySelectorAll('.topping');
const extras = document.querySelectorAll('.extra');
const totalPriceDisplay = document.querySelector('#totalPriceDisplay');
const totalPriceSpan = document.querySelector('#totalPrice');

let totalPrice = +type.value;
let toppingsTotal = 0;
totalPriceDisplay.textContent = `${totalPrice} €`;
totalPriceSpan.textContent = `${totalPrice} €`;

const updateUI = (price) => {
    totalPriceDisplay.textContent = `${price} €`;
    totalPriceSpan.textContent = `${price} €`;
    document.querySelector(".price-banner").animate(
        [
          { transform: 'transform: scale(1)', backgroundColor: '#C9184A' },
          { transform: 'scale(1.1)', backgroundColor: '#FF758F'},
          { transform: 'transform: scale(1)', backgroundColor: '#C9184A' }
        ], {
          duration: 3000,
          iterations: 1
        }
      );
}

const getType = (e) => {
    let amount = +e.target.value;
    totalPrice = amount + toppingsTotal;
    updateUI(totalPrice);
}

const getToppingOrExtra = (e) => {
    let amount = +e.target.value;
    if (e.target.checked) {
        totalPrice += amount
        toppingsTotal += amount;
    } else {
        totalPrice -= amount;
        toppingsTotal -= amount;
    }
    updateUI(totalPrice);
}

type.addEventListener('change', getType);

for (const topping of toppings) {
    topping.addEventListener('change', getToppingOrExtra);
}

for (const extra of extras) {
    extra.addEventListener('change', getToppingOrExtra);
}

