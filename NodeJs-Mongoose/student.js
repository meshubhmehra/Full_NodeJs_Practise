const mongoose = require('mongoose')

const stuSchema = new mongoose.Schema({
    name: String,
    city: String,
    age: Number
})

module.exports = mongoose.model('students', stuSchema)