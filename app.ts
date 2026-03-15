// class User{
//     name='harsh'
//     age= 22
//     village= 'sangamner'
// }

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

// //Array

// let arr: number[] = [12, 3, 45, 6, 67, 2];
// console.log(arr);

// //Tuple

// let arr2: [number, string] = [12, "hekki"];
// console.log(arr2[1]);

// //Enum

// enum statusCode {
//   success = 200,
//   create = 201,
//   error = 404,
// }

// let accessCode: statusCode = statusCode.error;
// console.log(accessCode);

// //Types

// let a: any = "undefined";
// console.log(typeof a);

// function sum(): void {
//   console.log(1 + 1);
// }
// console.log(sum());

//Type Inference

let age = "10";
console.log(age);

//Type Annotation

let numb: string = "10";
console.log(numb);

//Interface

interface user {
  name: string;
  email: string;
  age: number;
}

let user2: user = {
  name: "Md Irfan",
  email: "a@a.com",
  age: 23,
};
console.log(user2);

//Extending interfaces

interface user3 extends user {
  role: string;
}

let userRole: user3 = {
  name: "Md Framan",
  email: "md@.com",
  role: "Admin",
  age: 11,
};

console.log(userRole);

//Intersection Types

type Admin ={
    name: string
}

type User= {
    role: string
}
type adminUser = Admin & User

let getuser : adminUser ={
    name:'Md Danish',
    role:'Analyst'
}

console.log(getuser);

//Union Type

function getId(id: number | string){
    console.log(id);
    
}

getId(123)
getId(123)

getId('Hiiiiiii')
