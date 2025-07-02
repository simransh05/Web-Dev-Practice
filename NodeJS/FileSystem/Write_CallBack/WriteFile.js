// const fs = require('fs')
// fs.writeFile()

// another approach (call back api)
const {writeFile} = require('fs')
// const data = 'this is the data';
const data = ' Some more data';
writeFile(
    'helloWorld.txt',
    data,
    {
        encoding: 'utf8',
        flag:'a' // flags w - write , a - append , r-read
    },
    (err)=>{
        if(err) return console.log('error ',err)
        
        console.log('file written sucessfully ');
    }
)