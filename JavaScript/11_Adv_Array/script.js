//  ---------------------MAP METHOD--------------------------------

// const square =num => num*num;



// const num= [1,2,3,4,5,6]

// console.log(num.map(square));

// const sqr = (n)=>{
//     return Math.sqrt(n)
// }

// console.log(num.map(sqr))


// --------------------FILTER METHOD----------------------------
// const arr = [1,2,3,4,5,6,7,8,9,10];

// const isOdd = (n)=>{
//     if(n%2!=0){
//         return true
//     }else {
//         return false
//     }
// }

// console.log(arr.filter(isOdd))


// const fruit = ['apple','grapes','mango','litchi','orange']

// const len = (fruit)=>{
//     if(fruit.length>5){
//         return true;
//     }
// }

// console.log(fruit.filter(len))


// -------------------------------REDUCE METHOD---------------------

// const arr =[1,2,3,4,5]

// console.log(arr.reduce((prev,curr)=>prev+curr));


// --------------------------------SORT METHOD----------------------

const arr =['apple','mango','banana','grapes','litchi']

console.log(arr.sort())

const num =[1,2,10,11,12,8,9];
console.log(num.sort((a,b)=>b-a))
