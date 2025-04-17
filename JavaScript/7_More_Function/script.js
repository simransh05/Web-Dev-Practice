
// default value is given only to the last parameter
// function sum(x,y,z=4){
//     return x+y+z
// }
// if we write again then its overwritten
// console.log(sum(1,2,7))


// normal way
// function fun(){
// }

// store function in a variable 
// anonymous function 
// const square = function (n){
//     return n*n;
// }

// calling the function in storing 
// console.log(square(5))



// arraw function (remove function keyword and add => arrow)
// const cube = (n)=>{
//     return n*n*n;
// }

// or only one argument and one statement in between 
const cube = n => n * n * n;

console.log(cube(3))