const connection = require('./config')
const express = require('express')
const mongodb = require('mongodb')
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/', async (req, res) => {
    const data = await connection()
    const finalData = await data.find().toArray()
    res.send(finalData)
})

app.post('/', async (req, res) => {
    const data = await connection()
    const putData = await data.insertOne(req.body)
    res.send(putData)

})


app.put('/', async (req, res) => {
    const data = await connection()
    const result = data.updateOne({ name: 'abc' },
        { $set: req.body })
    res.send('Data Updated')
})


//dynamicaly update 

// app.put('/:name', async (req, res) => {
//     const data = await connection();
//     const result = await data.updateOne({ name: req.params.name },
//         { $set: req.body })
//     res.send(result)
// })

app.delete('/:id', async (req, res) => {

    const data = await connection();
    const result = data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) })
    res.send('Done')
})


app.listen(PORT)