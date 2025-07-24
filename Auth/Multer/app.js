const express = require('express');
const app = express();
const multer = require('multer');
const cloudinary = require('cloudinary').v2
const path = require('path')
const DatauriParser = require('datauri/parser');
const parser = new DatauriParser();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');

cloudinary.config({
    cloud_name: 'name',// require from the app
    api_key: 'key',
    api_secret: 'secret'
})
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/tmp/my-uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname)
    }
})


function fileFilter(req, file, cb) {
    if (file.mineType === 'image/jpeg' || file.mineType === 'image/jpg' || file.mineType === 'image/svg' || file.mineType === 'image/png') {
        cb(null, true)
    } else {
        cb(null, false)
    }

}
// app.use(multer({ storage, fileFilter }).single('image'));
app.use(multer({}).single('image'));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', (req, res) => {
    const { title, description } = req.body;
    console.log(title, description);
    // console.log(req.file);
    const ext = path.extname(req.file.originalname);
    const fileuri = parser.format(ext, req.file.buffer)
    cloudinary.uploader.upload(`${fileuri.content}`, (error, result) => {
        console.log(result, error);
    });
    res.send("ok");
})

app.listen(4000, () => {
    console.log('Server is running at http://localhost:4000');
});