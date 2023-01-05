const fileSchema = require("../Schema/fileSchema")

const Controller = {
    addProduct: async (req, res) => {
        const data = await fileSchema.create({
            name: req.body.name,
            file: { data: req.file.filename, contentType: 'image/jpg' }
        })
        res.send('Data is Saved')
    },
    findAll: async (req, res) => {
        const data = await fileSchema.find()
        res.send(data)
    }

}
module.exports = Controller
