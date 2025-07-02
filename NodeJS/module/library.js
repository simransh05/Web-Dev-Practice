function add( a, b){
    return a+b;
}

function sub(a,b ){
    return a-b;
}

// one way is to add in the global space but it will polute the global space 
// global.add = function add( a, b){
//     return a+b;
// }

// anpther way is using module 
// console.log(module.exports)

// module.exports.add = add;
module.exports= {add,sub};