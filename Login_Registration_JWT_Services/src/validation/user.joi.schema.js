const joi = require('@hapi/joi')

module.exports = {
    joi_schema: joi.object({
        firstname: joi.string().min(3).max(15).required(),
        lastname: joi.string().min(3).max(15).required(),
        mobile: joi.number().integer().min(1000000000).message('Invalid No').max(9999999999).message('Invalid No').required(),
        email: joi.string().email().min(3).required(),
        password: joi.string().min(5).max(20).required(),
        rep_password: joi.ref('password')
    })
}