const type = document.querySelector('#type');
const toppings = document.querySelectorAll('.topping');
const extras = document.querySelectorAll('.extra');
const total = document.querySelector('#totalPriceDisplay');

let totalPrice = +type.value;
total.innerText = `${totalPrice} $`;

const getType = (e) => {
    total.innerText = `${e.target.value} $`;
    totalPrice = +e.target.value;
}

const getToppingOrExtra = (e) => {
    if (e.target.checked) {
        total.innerText = `${totalPrice + +e.target.value} $`;
        totalPrice += +e.target.value;
        
    } else {
        total.innerText = `${totalPrice - +e.target.value} $`;
        totalPrice -= +e.target.value;
        
    }
}

type.addEventListener('change', getType);

for (const topping of toppings) {
    topping.addEventListener('change', getToppingOrExtra);
}

for (const extra of extras) {
    extra.addEventListener('change', getToppingOrExtra);
}

