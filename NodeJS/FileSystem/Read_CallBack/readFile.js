const {readFile} = require('fs');

readFile(
    'message.txt',
    {
        encoding:'utf8',
        flag:'r'
    },
    (err,data)=>{
        if(err) return console.log(err.message);
        console.log(data)// use encoding option or use data.tostring()
    }
)