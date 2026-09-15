const numbers = [1, 2, 3, 4, 5,6, 7, 8, 9, 10];

// Filter out even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

const greterThanFive = numbers.filter(num => num > 5);

console.log(greterThanFive); // Output: [6, 7, 8, 9, 10]

const products = [
    { name: 'Laptop', price: 1000 ,inStock: true},
    { name: 'Phone', price: 500 ,inStock: false},
    { name: 'Tablet', price: 300 ,inStock: true},
    { name: 'Monitor', price: 200 ,inStock: false},
];

// Filter products that are in stock
const inStockProducts = products.filter(product => product.inStock);

console.log(inStockProducts); 
// Output: [{ name: 'Laptop', price: 1000, inStock: true }, { name: 'Tablet', price: 300, inStock: true }]