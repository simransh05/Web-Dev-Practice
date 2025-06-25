function cb() {
    console.log('inside cb')
}
function fun(f) {
    console.log('inside fun')
    f()
}
// callback func - can also add the entire cb here 
fun(cb);

// sync 

// console.log('start')
// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }
// console.log('end')


// async 
console.log('start')
function timer() {
    for (let i = 1; i <= 10; i++) {
        console.log(i)
    }
}
setTimeout(timer, 5000); // same as window.setTimeout(timer, 5000);

console.log('end')