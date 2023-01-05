const express = require('express')
require('./config')
const student = require('./student')

const app = express()

app.use(express.json())


app.get('/list', async (req, res) => {
    const data = await student.find()
    res.send(data)
})

app.post('/add', async (req, res) => {
    const data = student(req.body)
    const result = await data.save()
    res.send(result)
})

app.delete('/delete/:_id', async (req, res) => {
    const data = await student.deleteOne(req.params)
    res.send(data)
})

app.put('/update/:name', async (req, res) => {
    const data = await student.updateOne(req.params, {
        $set: req.body
    })
    res.send(data)
})

app.listen(3000)

