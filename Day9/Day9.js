const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];  //slice method
const citrus = fruits.slice(0,1);
const removed = fruits.splice(2, 2, "parrot", "anemone", "blue");   //splice method return only removed element

console.log(citrus);
console.log(removed);
console.log(fruits);