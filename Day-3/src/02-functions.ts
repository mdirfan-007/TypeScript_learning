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