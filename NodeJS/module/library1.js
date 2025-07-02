 const lib2 = require('./library2')

 function sub(a,b){
    return a-b;
 }

 let  b = 20;


//  module.exports = {
//     sub,
//     b,
//     lib2
//  }

module.exports.lib2 = lib2;
module.exports.b = b;
module.exports.sub = sub;