const express = require('express')
const app = express()
const port = 3100
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!!!!!!!!!' })
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

// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = express.urlencoded({extended: false});
  
app.get('/contacts.ejs', function (_, response) {
    response.sendFile(__dirname + '/contacts.ejs');
});
app.post('/contacts.ejs', urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.userName} - ${request.body.userTel} - ${request.body.userText}`);
});


// app.get('/test', (req, res) => {
//     res.render('test', { title: 'Hey', message: 'Hello there!' })
// }) 
// app.get('/layout', (req, res) => {
//     res.send('Layout!')
// })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
