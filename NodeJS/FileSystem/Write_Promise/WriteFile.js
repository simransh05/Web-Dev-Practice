const {writeFile} = require('fs/promises')
const data = 'write file using promise and async await function ';
// let write = writeFile(
//     "message.txt",
//     data,
//     {
//         encoding:'utf8',
//         flag:'w'
//     }
// )

// write.then(()=>{
//     console.log('file return successfully')
// })
// .catch(()=>{
//     console.log('error occur')
// })

async function WriteData(data) {
    await writeFile(
        'message.txt',
        data,
        {
            encoding:'utf8',
            flag:'w'
        }
    )
    console.log('checking async await')
}

WriteData(data);
// first this line run then the the function as promise are now at waiting area
console.log('outside the aync function')