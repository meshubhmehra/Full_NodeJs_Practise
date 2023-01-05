const mongoose = require('mongoose')
const fileSchema = new mongoose.Schema({
    name: String,
    file: { data: Buffer, cotentType: String }
})
module.exports = mongoose.model('files', fileSchema)