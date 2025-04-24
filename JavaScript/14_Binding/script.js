// ---------------------IMPLICIT BINDING -- this is refered to the obj itself--------------------

// const obj ={
//     name : "kartik",
//     age: 23,
//     isAdult: true,
//     sayName:function (){
//         console.log(this);
//     },
//     favColor : {
//         color:"blue",
//         sayColor:function(){
//             console.log(this)
//         }
//     }
// }


// --------------EXPLICIT BINDING------------

function fun(name,age){
    console.log(name);
    console.log(age);
    console.log(this)
}

const a = {
    m :"hello",
    n:10
}

// fun("kartik",23);

// now a will be bind to this. this is known as explicit binding
// fun.call(a,"kartik",23)

// bind method
const f = fun.bind(a) 
f("kartik",23)

// new is for constructor binding 

// default is when non of the above is availablethen window 