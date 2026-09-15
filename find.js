const numbers = [10, 20, 30, 40, 50];

const found = numbers.find(function (num) {
    return num > 25;
});
console.log(found); 

const result = numbers.find(num => num < 15);
console.log(result);

const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

const user = users.find(user => user.id === 2);
console.log(user);