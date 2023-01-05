const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
mongoose.connect('mongodb://localhost:27017/school', (err) => {
    if (err) {
        throw err
    }
    else {
        console.log("DataBase connected");
    }
})