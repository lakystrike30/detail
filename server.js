const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3100
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!!!!!!!!!' })
})

app.post('/api/feedback', (req, res) => {
    try {

       const transporter = nodemailer.createTransport({
            host: "smpt.mail.ru",
            port: 465,
            secure: true,
            auth: {
                user: "alex.shado88@mail.ru",
                pass: "WF3XwypYJdvJQKcxJSQm",

            }
       });


    } catch (e) {
        return res.status(500).send({
            status: 500,
            message: 'Ошибка при запросе'
        });
    }
})

app.get('/works.ejs', (req, res) => {
    res.render('works', {myTitle: 'works'})
})

app.get('/contacts.ejs', (req, res) => {
    res.render('contacts', {myTitle: 'contacts'})
})

app.get('/blog.ejs', (req, res) => {
    res.render('blog', {myTitle: 'blog'})
})

app.get('/faq.ejs', (req, res) => {
    res.render('faq', {myTitle: 'faq'})
})

app.get('/otzivi.ejs', (req, res) => {
    res.render('otzivi', {myTitle: 'otzivi'})
})

app.get('/vacan.ejs', (req, res) => {
    res.render('vacan', {myTitle: 'vacan'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
