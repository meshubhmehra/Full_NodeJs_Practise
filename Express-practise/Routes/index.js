const routes = require('express').Router()
const students = require('../Schema/student')
const moment = require('moment')

routes.get('/', async (req, res) => {
    const data = await students.find({})
    res.send(data)
})

routes.post('/add', async (req, res) => {
    const data = await students.create({
        name: req.body.name,
        age: req.body.age,
        city: req.body.city,
        admission: moment().format('MMMM D  h:m:s')
    })
    res.send(data)
})


module.exports = routes