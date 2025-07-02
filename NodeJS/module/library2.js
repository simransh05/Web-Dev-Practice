const lib1 = require('.//library1')
 let a = 10;
 function add(a,b){
    return a+b;
 }

//  module.exports ={
//     add,
//     a,
//     lib1
//  }
module.exports.lib1 = lib1;
module.exports.a = a;
module.exports.add = add;