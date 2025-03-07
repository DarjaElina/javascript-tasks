export const createParagraphs = (keysArray, order, parentDiv) => {
    keysArray.forEach(k => {
        const paragraph = document.createElement('p');
        paragraph.classList.add('decoratedParagraph')
        parentDiv.appendChild(paragraph);
        switch (k) {
            case 'customerName':
                paragraph.textContent = `Customer name: ${order.customerName}`;
                return;
            case 'pancakeType':
                paragraph.textContent = `Pancake type: ${order.pancakeType}`;
                return;
            case 'toppings':
                paragraph.textContent = `Toppings: ${order.toppings.length > 0 ? order.toppings : 'Not selected'}`;
                return;
            case 'extras':
                paragraph.textContent = `Extras: ${order.extras.length > 0 ? order.extras : 'Not selected'}`;
                return;
            case 'deliveryMethod':
                paragraph.textContent = `Delivery method: ${order.deliveryMethod}`;
                return;
            case 'totalPrice':
                paragraph.textContent = `Total price: ${order.totalPrice} €`;
                return;
            default:
                paragraph.textContent = '';
        }
    })
};