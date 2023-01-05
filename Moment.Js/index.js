const express = require('express')
require('./config')
const dataSchema = require('./dateSchema')
const moment = require('moment')

const app = express()
app.use(express.json())

app.post('/add', async (req, res) => {
    const data = dataSchema.create({
        name: req.body.name,
        currentTime: moment().format('LTS'),
        valInyearFromNow: req.body.valInyearFromNow,
        yearFromNow: moment(req.body.yearFromNow, "YYYYMMDD").fromNow()
    })
    res.send(req.body)
})
app.listen(3000)