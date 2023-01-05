const mongoose = require('mongoose')
const imgSchema = new mongoose.Schema({
    image: String,
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('images', imgSchema)