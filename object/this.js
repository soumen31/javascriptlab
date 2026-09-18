const person = {
    firstName:"Alice"
    lastName:"Johnson"
    age:20,
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
},
greet(){
    return `Hello, my name is ${this.getFullName()} and I am ${this.age} years old.`;
}
};

console.log(person.getFullName());
console.log(person.greet());


