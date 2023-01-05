const express = require('express')
const mainrouter = require('./Route/index')

const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(mainrouter)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})