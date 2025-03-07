import { createParagraphs } from './utils.js';

const orders = JSON.parse(localStorage.getItem('orders')) || [];
const orderList = document.querySelector('#orderList');

const createDropdown = (currentSelected) => {
    const options = ['waiting', 'ready', 'delivered'];
    const selected = options.find(o => o === currentSelected);
    const select = document.createElement('select');

    for (const option of options) {
        const optionNode = document.createElement('option');
        optionNode.setAttribute('value', option);

        let optionText = document.createTextNode(`${option.charAt(0).toUpperCase()}${option.slice(1)}`);
        optionNode.appendChild(optionText);
        select.appendChild(optionNode);
    }

    select.value = selected;
    return select;
}

const createDropdownWrapper = (label, dropdown, parentDiv) => {
    const dropdownWrapper = document.createElement('div');
    dropdownWrapper.setAttribute('class', 'statusDropdownWrapper');
    dropdownWrapper.append(label, dropdown);
    styleDropdownWrapper(dropdownWrapper);

    parentDiv.appendChild(dropdownWrapper);
}

const styleDropdownWrapper = (dropdown) => {
    switch (dropdown.childNodes[1].value) {
        case 'waiting':
            dropdown.style.backgroundColor = '#FFC107';
            return;
        case 'ready':
            dropdown.style.backgroundColor = '#A2D2FF';
            return;
        case 'delivered':
            dropdown.style.backgroundColor = '#B8E0D6';
            return;
        default:
            dropdown.style.backgroundColor = '#FFF0F3';
    }
}

const createRemoveOrderBtn = (parentDiv) => {
    const btn = document.createElement('button');
    btn.style.margin = '1rem';
    btn.textContent = 'Remove order';
    parentDiv.appendChild(btn);
    return btn;
}

const updateOrders = (orders) => {
    localStorage.setItem('orders', JSON.stringify(orders));
    displayOrders(orders);
}


const displayOrders = (orders) => {
    orderList.textContent = '';

    if (orders.length === 0)
        orderList.textContent = "Looks like you've completed all orders for the current moment 😃";

   

    orders.forEach((order) => {
        const orderItem = document.createElement('li');
        const status = document.createElement('p');
        status.textContent = 'Status: ';
        const dropdown = createDropdown(order.status);
        createDropdownWrapper(status, dropdown, orderItem);
        createParagraphs(['customerName', 'pancakeType', 'toppings', 'extras', 'deliveryMethod', 'totalPrice'], order, orderItem);

        dropdown.addEventListener('change', () => {
            const updatedOrders = orders.map(o => o.id === order.id ? {...order, status: dropdown.value} : o);
            updateOrders(updatedOrders);
        });

        if (order.status === 'delivered') {
            const btn = createRemoveOrderBtn(orderItem);
            btn.addEventListener('click', () => {
                const updatedOrders = orders.filter(o => o.id !== order.id)
                updateOrders(updatedOrders);
            })
        }

        orderList.appendChild(orderItem);
    })
}

const searchOrder = () => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const searchText = document.querySelector('#searchOrder').value;
    const filteredOrders = orders.filter(o => o.id.toLowerCase().includes(searchText));

    displayOrders(filteredOrders);
}

const sortOrders = () => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.sort((order1, order2) => order2.status.localeCompare(order1.status));

    displayOrders(orders);
}

document.querySelector('#searchOrder').addEventListener('input', searchOrder);

document.querySelector('#sortOrders').addEventListener('click', sortOrders);

displayOrders(orders);
