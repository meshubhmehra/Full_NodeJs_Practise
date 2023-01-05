const express = require('express')
require('./Config/config')
const routes = require('./Routes/router')

const app = express()
app.use(express.json())
app.use(routes)

app.listen(3000)




