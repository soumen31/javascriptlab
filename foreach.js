const fruits = ["apple", "banana", "cherry"];

fruits.forEach(function(fruit, index) {
    console.log(`Fruit at index ${index} is ${fruit}`);
});

//arrow function shorthand
fruits.forEach((fruit, index) => {
    console.log(`${index+1} . ${fruit}`);
});

const result = fruits.forEach(fruit => fruit.toUpperCase());
console.log(result); 
