function fun() {
    function fun1() {
        console.log("inner fun")
    } return fun1
}

// storing in a variable 
const f = fun()

// return what has to be returned  like in this case function is returned
console.log(f)
// call the function

f()


function multiply(num){
    return num*2;
}

function a(multiply){
    const result = multiply(10);
    return result
}

console.log(a(multiply))