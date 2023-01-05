const mongoose = require('mongoose')
const dateSchema = mongoose.Schema({
    name: String,
    currentTime: String,
    todayDate: String,
    valInyearFromNow: String,
    yearFromNow: String
})
module.exports = mongoose.model('dates', dateSchema)