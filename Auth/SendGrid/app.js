const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
app.use(express.urlencoded({ extended: true }));
app.set('views engine', 'hbs');

// api key https://sendgrid.com/docs/Classroom/Send/api_keys.html
let options = {
    auth: {
        api_key: 'SENDGRID_PASSWORD'
    }
}

// or

// username + password
// var options = {
//     auth: {
//         api_user: 'SENDGRID_USERNAME',
//         api_key: 'SENDGRID_PASSWORD'
//     }
// }

const mailer = nodemailer.createTransport(sgTransport(options));


app.get('/', (req, res) => {
    res.render('index');
});

app.post('/signup', (req, res) => {
    const { email } = req.body;
    console.log(email);
    mailer.sendMail({
        to: email,
        from: 'roger@tacos.com',
        subject: 'Hi there',
        text: 'welcome to my page',
        html: '<b>Awesome signup! success</b>'
    }, (err, res) => {
        if (err) return console.log(err);
        console.log(res);
    })
    res.send('done');
})
app.listen(4000, () => {
    console.log('Server is running at http://localhost:4000');
});