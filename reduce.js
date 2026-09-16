const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15

//How it works step by step:
// step 1: accumulator = 0, currentValue = 1 => return 0 + 1 = 1
// step 2: accumulator = 1, currentValue = 2 => return 1 + 2 = 3
// step 3: accumulator = 3, currentValue = 3 => return 3 + 3 = 6
// step 4: accumulator = 6, currentValue = 4 => return 6 + 4 = 10
// step 5: accumulator = 10, currentValue = 5 => return 10 + 5 = 15

//Arrow function version
const sumArrow = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 1);
console.log(sumArrow); // Output: 15
//Finding the maximum value in an array
const max = numbers.reduce((accumulator, currentValue) => {
    return currentValue > accumulator ? currentValue : accumulator;
});



//counting occuranence
const fruits = ['apple', 'banana', 'orange', 'apple', 'banana', 'apple'];

const fruitCount = fruits.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
    return accumulator;
}, {});

console.log(fruitCount); // Output: { apple: 3, banana: 2, orange: 1 }

// Calculating total price
const cart = [
    { name:"Laptop", price:1200, quantity:1 },
    { name:"Mouse", price:25, quantity:2 },
    { name:"Keyboard", price:75, quantity:1 }
];

const total = cart.reduce((acc,item)=> 
    acc+ item.price* item.quantity,0);
console.log(total);// 1325