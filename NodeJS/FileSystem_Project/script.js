const fs = require('fs')
const Jimp = require('jimp');

// fs.readFile(
//     'singer.jpeg',{
//         encoding:'base64'
//     },(err,data)=>{
//         if(err) return console.log(err.message);
//         console.log(data)
//     }
// )

// Step 1: Read image as base64 string
let base64Data = fs.readFileSync('singer.jpeg', { encoding: 'base64' });

// Step 2: Write base64 string to text file
fs.writeFileSync('singer.txt', base64Data);

// Step 3: Read base64 string from text file
let base64FromFile = fs.readFileSync('singer.txt', { encoding: 'utf8' });

// Step 4: Convert base64 back to binary
let imageBuffer = Buffer.from(base64FromFile, 'base64');

// Step 5: Save binary buffer as image
fs.writeFileSync('new_img.jpeg', imageBuffer);


Jimp.read('singer.jpeg', (err, singer) => {
    if (err) throw err;
    singer
        .resize(256, 256)// resize
        .quality(60) // set quality for jpg file
        // .greyscale()// set greyscale
        .write('new-img.jpeg') // save
})