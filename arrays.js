const myArray = [];

myArray[0] = "Dave"
myArray[1] = 1001

// Add in the beginning of the array
myArray.unshift(42);

// Add in the end
myArray.push(40);

// Remove from the last
myArray.pop();

// Removes from the beginning
myArray.shift();

// returns the length
const newlength = myArray.shift();

myArray.splice(1, 1) // removes one value from position 1
myArray.splice(1, 1, 42); // replace value in second position by 42

console.log(newlength);

const myArray = ["A", "B", "C", "D", "E", "F"];

myArray.slice(2, 5); // returns [C, D, E]

myArray.reverse(myArray);

const newString = myArray.join(); // puts comma between items
newString.split(",") // create new array

const newArray2 = [...myArray, ...newString]; // Joins arrays
