

class User{
    name='harsh'
    age= 22
    village= 'sangamner'
}

var user1 = new User()
console.log(user1);


class Person {
  constructor(public name: string, private age: number) {}
}

let b1 = new Person('harsh', 22);
console.log(b1);


function getMan (name: string, age: number, gender: string='not to say'){
    console.log(name, age, gender);
} 

getMan('Irfan',26,'Male')
getMan('Arthor',22)


function add(...trr:number[]){
    console.log(trr);
    

}

add(1,2,3,3,3,3,3,3,3,4,5,6,7,8)