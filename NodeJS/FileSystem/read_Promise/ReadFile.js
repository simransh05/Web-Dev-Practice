const {readFile} = require('fs/promises');

// let file = readFile('message.txt');

// file.then((data)=>{
//     console.log(data.toString());
// })
// .catch((err)=>{
//     console.log('error:',err.message)
// })


// aync functon in promise 
async function fileFuncton() {
    let data = await readFile('message.txt');
    console.log(data.toString())
}

fileFuncton()