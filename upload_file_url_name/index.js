const express = require('express')
const multer = require('multer')
const path = require('path')

const app = express()


const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({
    storage: storage
})

app.use('/profile', express.static('upload/images'))
app.post('/upload', upload.single('profile'), (req, res) => {
    res.json({
        success: 1,
        profile_url: `http://localhost:3000/profile/${req.file.filename}`
    })
})
app.listen(3000)




// const upload = multer({
//     storage: multer.diskStorage({
//         destination: (req, file, cb) => {
//             cb(null, 'uploads')
//         }, filename: (req, file, cb) => {
//             cb(null, file.fieldname + "-" + Date.now() + '.jpg')
//         }
//     })
// }).single('test')