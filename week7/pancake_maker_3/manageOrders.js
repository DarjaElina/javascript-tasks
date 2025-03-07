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

const styleDropdown = (dropdown) => {
    dropdown.style.display = 'flex';
    dropdown.style.justifyContent = 'center';
    dropdown.style.alignItems = 'center';
    dropdown.style.gap = '1.5rem';
    dropdown.style.padding = '0.5rem 1rem';
    dropdown.style.borderRadius = '0.5rem';
    dropdown.style.width = '100%';
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
    }
}

const createRemoveOrderBtn = (parentDiv) => {
    const btn = document.createElement('button');
    btn.style.margin = '1rem';
    btn.textContent = 'Remove order';
    parentDiv.appendChild(btn);
    return btn;
}


const displayOrders = (orders) => {
    orderList.innerHTML = '';
    if (orders.length === 0)
        orderList.textContent = "Looks like you've completed all orders for the current moment 😃";
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
        status.style.border = 'none';
        const statusDropdown = createDropdown(order.status);
        statusDiv.append(status, statusDropdown);
        styleDropdown(statusDiv);

        
        


        statusDropdown.addEventListener('change', () => {
            const updatedOrders = orders.map(o => o.id === order.id ? {...order, status: statusDropdown.value} : o);
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

        if (order.status === 'delivered') {
            const btn = createRemoveOrderBtn(orderItem);
            btn.addEventListener('click', () => {
                const updatedOrders = orders.filter(o => o.id !== order.id)
                localStorage.setItem('orders', JSON.stringify(updatedOrders));
                displayOrders(updatedOrders);
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