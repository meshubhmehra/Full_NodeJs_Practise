const express = require('express')
require('./config/config')
const user_router = require('./routes/user.router')

const app = express()
app.use(express.json())
app.use(user_router)
app.listen(3000)