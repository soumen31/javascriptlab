JavaScript
// index.js

const _ = require("lodash");
const chalk = require("chalk");
const dayjs = require("dayjs");

// --- Using lodash ---
// Lodash is a utility library with helpful functions for arrays, objects, strings

const numbers = [1,2,3,4,5,6,7,8,9,10];

console.log("--- Lodash Examples ---");
console.log("Chunk:", _.chunk(numbers,3));
// [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [10] ]

console.log("Shuffle:", _.shuffle(numbers));
// Random order each time

console.log("Sample:", _.sample(numbers));
// One random element

console.log("Sum:", _.sum(numbers));
// 55

const users = [
    { name:"Alice", age:30, department:"Engineering" },
    { name:"Bob", age:25, department:"Marketing" },
    { name:"Charlie", age:35, department:"Engineering" },
    { name:"Diana", age:28, department:"Marketing" }
];

console.log("Group by department:", _.groupBy(users,"department"));

console.log("Sort by age:", _.sortBy(users,"age").map(u => u.name));

const obj1 = { a:1, b: { c:2 } };
const obj2 = _.cloneDeep(obj1);
obj2.b.c= 99;
console.log("Original:", obj1.b.c);// 2 (not affected by the change)
console.log("Clone:", obj2.b.c);// 99


// --- Using chalk ---
// Chalk adds colors to terminal output

console.log("\n--- Chalk Examples ---");
console.log(chalk.green("Success: Operation completed"));
console.log(chalk.red("Error: Something went wrong"));
console.log(chalk.yellow("Warning: Disk space low"));
console.log(chalk.blue.bold("Info: Server started"));
console.log(chalk.bgRed.white(" CRITICAL ")+ " System overload");
console.log(chalk.gray("Debug: Variable x = 42"));


// --- Using dayjs ---
// Day.js is a lightweight date manipulation library

console.log("\n--- Day.js Examples ---");
console.log("Now:",dayjs().format("YYYY-MM-DD HH:mm:ss"));
console.log("Day of week:",dayjs().format("dddd"));
console.log("Tomorrow:",dayjs().add(1,"day").format("YYYY-MM-DD"));
console.log("Last week:",dayjs().subtract(7,"day").format("YYYY-MM-DD"));
console.log("Start of month:",dayjs().startOf("month").format("YYYY-MM-DD"));

const birthday = dayjs("1990-06-15");
const age = dayjs().diff(birthday,"year");
console.log("Age if born on 1990-06-15:", age);

console.log("Is before:",dayjs("2020-01-01").isBefore(dayjs()));
console.log("Is after:",dayjs("2030-01-01").isAfter(dayjs()));