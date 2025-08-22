function greet(name: String) {
    console.log(`greet ${name}`)
}

greet('kartik');

function add(a: number, b: number): number {
    return a + b;
}

let sum: number = add(10, 20);
console.log(sum);

let add1 = (a: number, b: number): number => {
    return a + b;
}

let sum1 = add1(20, 20);
console.log(sum1);