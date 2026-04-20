"use strict";
function add(a, b) {
    return a + b;
}
const result = add(5, 10);
console.log(result);
function greet(name, greeting) {
    return `${greeting}, ${name}!`;
}
const greetingMessage = greet('Alice', 'Welcome to TypeScript!');
console.log(greetingMessage);
const add1 = (a, b) => a + b;
const result1 = add1(22, 88);
console.log(result1);
function greet1(name, age, age2) {
    console.log(name, age, age2);
}
greet1("Irfan");
greet1("Irfan", 22, 24);
function greet3(name = "Guest", name2) {
    console.log("Hello " + name);
}
greet3('Irfan');
const user = {
    name: "Irfan",
    greet() {
        console.log("Hi " + this.name);
    }
};
user.greet();
