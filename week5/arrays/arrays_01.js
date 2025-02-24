
let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];

console.log('Team members at the beginning are', teamMembers)

// 1. Loop through the `teamMembers` array and log each name to the console.
teamMembers.forEach(m => console.log(m));

// 2. Remove the first member of the array. 
teamMembers.shift()
console.log('Team members with first member removed', teamMembers);

// 3. Remove the last member of the array.  
teamMembers.pop();
console.log('Team members with last member removed', teamMembers);

// 4. Add a new member "Alex" to the front of the array.  
teamMembers.unshift("Alex")
console.log('Team members with Alex appended to the front', teamMembers);

// 5. Append a new member "Linda" to the end of the array.
teamMembers.push("Linda");
console.log('Team members with Linda appended to the end', teamMembers);

// 6. Create a new array that excludes the first two members, keeping the original array unchanged.
let newArr = teamMembers.slice(2);
console.log('New array that excludes Alex and Emily', newArr);
console.log('original array is unchanged', teamMembers)

// 7. Find the index of "Mike" in the array.  
const index = teamMembers.indexOf('Mike');
console.log('Index of Mike is', index);

// 8. Try to find the index of "Jake" (who is not in the array). 
const nonExistingIndex = teamMembers.indexOf('Jake'); 
console.log('index of Jake who is not there is', nonExistingIndex)

// 9. Replace "Mike" with "Carol" and "Bruce" in the same position.
teamMembers.splice(index, 1, 'Carol', 'Bruce');
console.log('team members with Mike replaced by Carol and Bruce', teamMembers);

// 10. Concatenate "Bob" to the array and create a new array, keeping the original array unchanged.  
newArr = teamMembers.concat('Bob');
console.log('new array with Bob', newArr);
console.log('original teamMembers unchanged', teamMembers);

// 11. Copy the entire `teamMembers` array using `slice` and store it in a new variable.  
newArr = teamMembers.slice();
console.log('copied array is', newArr);

// 12. Create a `newMembers` array with `"Tina"` and `"Dean"`, then merge it with `teamMembers` into a new array. 
const newMembers = ['Tina', 'Dean'];
const updatedTeamMembers = [...teamMembers, ...newMembers];
console.log('updated teamMembers with Tina and Dean is', updatedTeamMembers);

// const updatedTeamMembers = teamMembers.concat(newMembers)
// 13. Find all occurrences of "John" in the array and store their positions in a new array.
const johnIndexes = teamMembers.reduce((acc, person, index) => {
    if (person === 'John') acc.push(index);
    return acc;
}, []);
console.log(johnIndexes);
console.log('indexes of Jonh are', johnIndexes);

// 14. Transform all names in the array to be uppercase while keeping the original array unchanged.
const uppercasedTeamMembers = teamMembers.map(i => i.toUpperCase()); 
console.log('uppercased teamMembers is', uppercasedTeamMembers);

// 15. Sort `teamMembers` in alphabetical order.  
teamMembers.sort();
console.log('sorted teamMembers is', teamMembers);

// 16. Reverse the `teamMembers` array.  
teamMembers.reverse();
console.log('reversed teamMembers is', teamMembers);

// 17. Check if at least one member in the array is named "John".  
console.log('at least one members name is John:', teamMembers.includes('John'));

// 18. Check if all names in the array have more than three letters. 
console.log('all names in the array have more than three letters:', teamMembers.every(i => i.length >= 3));