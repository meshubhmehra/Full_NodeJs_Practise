const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page'
    })
})
app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact Page'
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})