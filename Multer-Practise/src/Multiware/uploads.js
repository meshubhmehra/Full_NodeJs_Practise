const multer = require('multer')

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'upload')
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + file.originalname)
        }
    })
}).single('test')

module.exports = upload



// const multer = require('multer')
// const upload = multer({
//     storage: multer.diskStorage({
//         destination: (req, file, cb) => {
//             cb(null, 'uploads')
//         }, filename: (req, file, cb) => {
//             cb(null, file.fieldname + "-" + Date.now() + '.jpg')
//         }
//     })
// }).single('test')

// module.exports = upload