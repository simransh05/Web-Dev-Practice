// let value = 10;
// console.log(value)

// var don't create a new variable 
var a = 200;
{
    var a= 300;
    console.log(a)
}
console.log(a)


// in case of let --> create a new variable 

let b = 200;
{
    let b = 300;
    console.log(b)
}

console.log(b)


// in case of const --> same as let

const c = 400;
{
    const c = 500
    console.log(c)
}
console.log(c)


// in js in block scope first check locally if not found then globally then also not found through error
let x = 10;
let y= 20;

if(true){
    let x= 30;
    console.log(x)
    console.log(y)
}