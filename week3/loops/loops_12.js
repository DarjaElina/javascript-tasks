/* 
Write a function named buildGroceryList:
- Prompt the user to input grocery items one by one.
- Stop when the user types "done".
Log the complete grocery list in the console.
 */

const buildGroceryList = () => {
    let groceryItem;
    let groceryList = [];
    while (groceryItem !== 'done') {
        groceryItem = prompt('Enter grocery items one by one');
        groceryList.push(groceryItem);
    }
    console.log(groceryList);
}

buildGroceryList();