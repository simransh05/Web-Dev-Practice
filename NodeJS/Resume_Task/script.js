const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        fs.readFile('./about.html', (err, data) => {
            if (err) return console.log(err.message);
            res.end(data);
        })
    } else if (req.url == '/project') {
        fs.readFile('./project.html', (err, data) => {
            if (err) return console.log(err.message);
            res.end(data);
        })
    } else if (req.url == '/resume') {
        fs.readFile('./resume.html', (err, data) => {
            if (err) return console.log(err.message);
            res.end(data);
        })
    }
});
const fs = require('fs');
const port = 4000;


// function reqHandler(req,res){
//     if(req.url=='/'){
//         const about = fs.readFile('./about.html');
//         res.render(about);
//     }else if(req.url=='/project'){
//         const project = fs.readFile('./project.html');
//         res.render(project);
//     }else if(req.url=='/resume'){
//         const resume = fs.readFile('./resume.html');
//         res.render(resume);
//     }
// }

server.listen(port, (err) => {
    if (err) {
        return console.log(err.message);
    }
    console.log(`server is running on ${port}`)
})