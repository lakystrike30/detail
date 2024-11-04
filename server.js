const express = require('express')
const app = express()
const port = 3100
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.get('/works',(req, res) => {
    res.render('works')
})

app.get('/contacts', (req, res) => {
    res.render('contacts', {myTitle: 'контакты'})
})
// app.get('/test', (req, res) => {
//     res.render('test', { title: 'Hey', message: 'Hello there!' })
// }) 
// app.get('/layout', (req, res) => {
//     res.send('Layout!')
// })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
