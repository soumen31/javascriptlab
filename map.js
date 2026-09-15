const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function (num) {
    return num * 2;
}); 
console.log(doubled);
console.log(numbers);

//arrow function shorthand
const squared = numbers.map(num => num * 2);
console.log(squared);


const users = [
    {  name: "Alice",age: 20 },
    {  name: "Bob" ,age: 25 },
    {  name: "Charlie",age: 30}
];

const naes = users.map(user => user.name);
console.log(names);

const prices = [10, 20, 30];
const withTax = prices.map(price => price * 1.1);
console.log(withTax);