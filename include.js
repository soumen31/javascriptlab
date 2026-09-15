const fruits = ["apple", "banana", "cherry"];
console.log(fruits.includes("banana"));
console.log(fruits.includes("grape"));

const allowedRoles  = ["admin","editor","moderator"];
const userRole = "editor";

if(allowedRoles.includes(userRole)){
    console.log("Access granted");
}
