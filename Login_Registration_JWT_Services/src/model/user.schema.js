const mongoose = require('mongoose')
const user_schema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    mobile: Number,
    email: String,
    password: String,
    rep_password: String
})
module.exports = mongoose.model('register_login', user_schema)