const orders = JSON.parse(localStorage.getItem('orders')) ? JSON.parse(localStorage.getItem('orders')) : [];
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

const styleDropdown = (dropdown) => {
    dropdown.style.display = 'flex';
    dropdown.style.justifyContent
    dropdown.style.gap = '2rem';
    dropdown.style.padding = '0.5rem';
    switch (dropdown.childNodes[1].value) {
        case 'waiting':
            dropdown.style.border = '2px solid orange';
            return;
        case 'ready':
            dropdown.style.border = '2px solid blue';
            return;
        case 'delivered':
            dropdown.style.border = '2px solid green';
            return;
    }
}

const createRemoveOrderBtn = (parentDiv) => {
    const btn = document.createElement('button');
    btn.textContent = 'Remove order';
    parentDiv.appendChild(btn);
    return btn;
}


const displayOrders = (orders) => {
    orderList.innerHTML = '';
    if (orders.length === 0)
        orderList.textContent = 'Looking good! You have no open orders!';
    orders.forEach((order, id) => {
        const orderItem = document.createElement('li');
        const customerName = document.createElement('p');
        const pancakeType = document.createElement('p');
        const toppings = document.createElement('p');
        const extras = document.createElement('p');
        const deliveryMethod = document.createElement('p');
        const totalPrice = document.createElement('p');
        const statusDiv = document.createElement('div');
        const status = document.createElement('p');
        const statusDropdown = createDropdown(order.status);
        statusDiv.append(status, statusDropdown);
        styleDropdown(statusDiv);

        if (order.status === 'delivered') {
            const btn = createRemoveOrderBtn(orderItem);
            btn.addEventListener('click', () => {
                const updatedOrders = orders.filter(o => o.id !== order.id)
                localStorage.setItem('orders', JSON.stringify(updatedOrders));
                displayOrders(updatedOrders);
            })
        }
        


        statusDropdown.addEventListener('change', () => {
            order.status = statusDropdown.value;
            const updatedOrders = orders.map(o => o.id === id ? {...order, status: statusDropdown.value} : o)
            localStorage.setItem('orders', JSON.stringify(updatedOrders));
            displayOrders(updatedOrders);
        });

        customerName.textContent = `Customer name: ${order.customerName}`;
        pancakeType.textContent = `Pancake type: ${order.pancakeType}`;
        toppings.textContent = `Toppings: ${order.toppings.length > 0 ? order.toppings : 'Not selected'}`;
        extras.textContent = `Extras: ${order.extras.length > 0 ? order.extras : 'Not selected'}`;
        deliveryMethod.textContent = `Delivery method: ${order.deliveryMethod}`;
        totalPrice.textContent = `Total price: ${order.totalPrice}`;
        status.textContent = `Status: `;

        orderItem.append(customerName, pancakeType, toppings, extras, deliveryMethod, totalPrice, statusDiv);
        orderList.appendChild(orderItem);
    })
}

const searchOrder = () => {
    const searchText = document.querySelector('#searchOrder').value;
    const filteredOrders = orders.filter(o => o.id.toLowerCase().includes(searchText));

    displayOrders(filteredOrders);
}

const sortOrders = () => {
    console.log(orders.sort((order1, order2) => order2.status.localeCompare(order1.status)))
    displayOrders(orders);
}

document.querySelector('#searchOrder').addEventListener('input', searchOrder);

document.querySelector('#sortOrders').addEventListener('click', sortOrders);

displayOrders(orders);