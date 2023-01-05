const { joi_schema } = require('../validation/user.joi.schema')

module.exports = {
    register: async (req, res, next) => {
        const validation = await joi_schema.validate(req.body)
        if (validation.error) {
            res.json({
                success: 0,
                message: validation.error.details[0].message
            })
        }
        else {
            next()
        }
    }
}
