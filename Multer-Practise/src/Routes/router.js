const routes = require("express").Router()
const upload = require('../Multiware/uploads')
const Controller = require('../Controller/add')



routes.get('/', Controller.findAll)

routes.post('/add', upload, Controller.addProduct)

module.exports = routes