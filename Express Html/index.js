const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000

const route = path.join(__dirname)

app.get('/', (req, res) => {
    res.sendFile(route + '/index.html')
})
app.get('/about', (req, res) => {
    res.sendFile(route + '/about.html')
})
app.get('/contact', (req, res) => {
    res.sendFile(route + '/contact.html')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})