const student = {
    name: "Alice",
    age: 20,
    course: "MERN",
    gpa: 3.8
}

const {name, age, course} = student;

console.log(name); // Output: Alice
console.log(age); // Output: 20
console.log(course); // Output: MERN

const {name:studentName, age:studentAge} = student;
console.log(studentName); // Output: Alice
console.log(studentAge); // Output: 20

const {name:n, email = "not provide"} = student;
console.log(n); // Output: Alice
console.log(email); // Output: not provide