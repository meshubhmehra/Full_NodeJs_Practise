const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

mongoose.connect('mongodb://localhost:27017/momentJsDates', (err) => {
    if (err) {
        throw err
    }
    else {
        console.log("Database Connected");
    }
})