const express = require('express')
const route = require('./Routes')
const PORT = process.env.PORT || 3000
require('./Config/config')

const app = express()
app.use(express.json())
app.use(route)

app.listen(PORT, console.log(`Server is running on port ${PORT}`))