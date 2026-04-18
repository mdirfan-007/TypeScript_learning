"use strict";
let message = 'Hello, TypeScript!';
console.log(message);
let naam = 'Alice';
let age = 30;
let isStudent = false;
let data = [1, 2, 3, 4, 5, 'string', 'another string', 'hello world', 1, 2,];
let person = ['Harsh', 12];
console.log(person);
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
let favColor = color.Green;
console.log(favColor);
