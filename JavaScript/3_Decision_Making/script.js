let a = 10;
let b = 30;
if(a<b){
    console.log("a is smaller")
}

if(a>b){
    console.log("a is larger")
}

const num =19;
if(num%2==0){
    console.log("Even")
}else {
    console.log("Odd")
}

const age = prompt("Enter Your Age")
// if(age>=18){
//     console.log("Eligible")
// }else{
//     console.log("Not Eligible")
// }

if(age <18){
    alert("Can not enter")
}else if(age>=18 && age<25){
    alert("Can enter  but cannot drink")
}else {
    console.log("Can enter and drink")
}