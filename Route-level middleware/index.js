const express = require('express')

const app = express()

const varify = (req, res, next) => {
    if (!req.query.age) {
        res.send('plese enter age')
    }
    else if (req.query.age < 18) {
        res.send('below 18')
    }
    else {
        next()
    }
}


//app.get('/'<=====this is home page route,  middleware<======we have to write middleware function name before (req,res) object,then req,res object)\

//[1]   '/'<====this is rout it can be any route
//[2]    middlewarefunction name<=====before (req,res)
//[3]     (req,res)<=====after middleware function name


app.use('view ejs', 'ejs')
app.get('/', varify, (req, res) => {

    res.send('Welcome to home page')

})
app.get('/user', (req, res) => {
    res.send('Welcome to user page')
})

app.listen(3000, () => {
    console.log('Server is running on 3000');
})