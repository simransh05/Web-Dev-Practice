function add(a,b){
    console.log(a+b);
}

function calculator(a,b,sum){
    sum(a,b);
}


calculator(1,2,add)

let hello = ()=>{
    console.log("hello")
}

setTimeout(hello,2000);