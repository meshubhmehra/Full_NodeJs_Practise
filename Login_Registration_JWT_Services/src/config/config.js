const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
module.exports = mongoose.connect('mongodb://localhost:27017/users', (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Database Connected");
    }
})