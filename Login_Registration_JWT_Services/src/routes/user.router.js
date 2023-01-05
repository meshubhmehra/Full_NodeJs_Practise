const router = require('express').Router()
const { register, showById, deleteByName, deleteByUserId, updateUser, login, showUserData } = require('../controller/user.controller')

const validation = require('../middleware/user.joi.validation')
const { checkToken } = require('../middleware/validation.jwt')
router.post('/register', validation.register, register)
router.get('/:_id', checkToken, showById)
router.delete('/:firstname', checkToken, deleteByName)
router.delete('/delete/:_id', checkToken, deleteByUserId)
router.put('/update/:firstname', checkToken, updateUser)
router.post('/login', login)
router.get('/data/user', showUserData)

module.exports = router