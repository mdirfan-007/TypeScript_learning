"use strict";
// class User{
//     name='harsh'
//     age= 22
//     village= 'sangamner'
// }
Object.defineProperty(exports, "__esModule", { value: true });
// var user1 = new User()
// console.log(user1);
// class Person {
//   constructor(public name: string, private age: number) {}
// }
// let b1 = new Person('harsh', 22);
// console.log(b1);
// function getMan (name: string, age: number, gender: string='not to say'){
//     console.log(name, age, gender);
// } 
// getMan('Irfan',26,'Male')
// getMan('Arthor',22)
// function add(...trr:number[]){
//     console.log(trr);
// }
// add(1,2,3,3,3,3,3,3,3,4,5,6,7,8)
// function getInfo<T>(data: T) {
//     return data
// }
// getInfo<string>('Hiiii')
// getInfo<number>(222)
// function getFirstElement<T>(arr: T[]): T {
// console.log(arr[0]);
// }
// getFirstElement<number>([1,2,3])
// getFirstElement<string>(["a","b","c"])
// let a: any = 10
// let d1 = (a as string)
// console.log(typeof d1);
//Array
let arr = [12, 3, 45, 6, 67, 2];
console.log(arr);
//Tuple
let arr2 = [12, 'hekki'];
console.log(arr2[1]);
//Enum
var statusCode;
(function (statusCode) {
    statusCode[statusCode["success"] = 200] = "success";
    statusCode[statusCode["create"] = 201] = "create";
    statusCode[statusCode["error"] = 404] = "error";
})(statusCode || (statusCode = {}));
let accessCode = statusCode.error;
console.log(accessCode);
//Types
let a = 'undefined';
console.log(typeof a);
function sum() {
    console.log(1 + 1);
}
console.log(sum());
//Type Inference 
let age = '10';
console.log(age);
//Type Annotation
let numb = "10";
console.log(numb);
let user2 = {
    name: 'Md Irfan',
    email: 'a@a.com',
    age: 23
};
console.log(user2);
//# sourceMappingURL=app.js.map