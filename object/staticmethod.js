const student = {
    name: "Alice",
    age: 20,
    course: "MERN"
};
console.log(Object.keys(student)); // Output: ["name", "age", "course"] 
console.log(Object.values(student)); // Output: ["Alice", 20, "MERN"]
console.log(Object.entries(student)); // Output: [["name", "Alice"], ["age", 20], ["course", "MERN"]]
for (const [key, value] of Object.entries(student)) {
    console.log(`${key}: ${value}`);
}

const defaults = {theme: "light", language: "en",
    fontsize: 14};

    const  userPrefs = {theme : "dark", language: "16"};
    const settings = Object.assign({}, defaults, userPrefs); 
   // "prefs":UnKnown word.
    console.log(settings); // Output: {theme: "dark", language: "16", fontsize: 14}
const settings2 = {...defaults, ...userPrefs};
console.log(settings2); // Output: {theme: "dark", language: "16", fontsize: 14}

console.log("name" in student); 
console.log("email" in student);
console.log(student.hasOwnProperty("name"));