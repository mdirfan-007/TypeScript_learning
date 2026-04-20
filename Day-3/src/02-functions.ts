function add (a: number, b: number): number {
    return a + b;
}

const result = add(5, 10);
console.log(result);

function greet(name:string , greeting:string ): string {
    return `${greeting}, ${name}!`;
}

const greetingMessage = greet('Alice', 'Welcome to TypeScript!');
console.log(greetingMessage);

const add1 = (a: number, b: number): number => a+b;

const result1 = add1(22,88);
console.log(result1);

function greet1(name: string, age?: number, age2?: number): void {
  console.log(name, age, age2);
}

greet1("Irfan");       
greet1("Irfan", 22,24);   


function greet3(name: string= "Guest",name2?:string): void {
  console.log("Hello " + name);
}

greet3('Irfan'); 

// Interface with Method

interface Person {
  name: string;
  greet(): void;
}

const user: Person = {
  name: "Irfan",
  greet() {
    console.log("Hi " + this.name);
  }
};

user.greet();