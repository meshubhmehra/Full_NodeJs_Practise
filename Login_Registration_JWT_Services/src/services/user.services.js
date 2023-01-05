const user_schema = require('../model/user.schema')

module.exports = {
    register: async (data) => {
        return await user_schema.create(data)
    },
    showById: async (data) => {
        return await user_schema.find(data)
    },
    deleteByName: async (data) => {
        return await user_schema.deleteOne(data);
    },
    deleteByUserId: async (data) => {
        return await user_schema.deleteOne(data)
    },
    updateUser: async (data, body) => {
        return await user_schema.updateOne(data, { $set: body })
    },
    login: async (data) => {
        return await user_schema.findOne(data)
    },
    showUserData: async () => {
        return await user_schema.find()
    }

}
