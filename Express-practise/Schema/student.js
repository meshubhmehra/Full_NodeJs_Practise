const mongoose = require('mongoose')
const students = new mongoose.Schema({
    name: String,
    age: Number,
    city: String,
    admission: String
})
module.exports = mongoose.model('students', students)