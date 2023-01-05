const router = require('express').Router()
const imgSchema = require('../Schema/imgSchema')


const multer = require('multer')


const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads')
        }, filename: (req, file, cb) => {
            cb(null, file.fieldname + "-" + Date.now() + '.jpg')
        }
    })
}).single('test')

router.post('/upload', upload, async (req, res) => {
    const data = await imgSchema.create({ image: req.file.filename, name: req.body.name, city: req.body.city })
    res.send(data)
})

module.exports = router