const coordinates = [40.7128,-74.0060];

const [latitude, longitude] = coordinates;
console.log(latitude); // Output: 40.7128
console.log(longitude); // Output: -74.0060

//skipping elements
const colors = ["red", "green", "blue", "yellow"];  
const [first, ,third]=colors;
console.log(first); // Output: red
console.log(third); // Output: blue

const [head,...tail]=[1,2,3,4,5]
console.log(head); // Output: 1
console.log(tail); // Output: [2, 3, 4, 5]

const [a=10,b=20,c=30]=[1,2];
console.log(a); // Output: 1
console.log(b);                 
console.log(c); // Output: 30
