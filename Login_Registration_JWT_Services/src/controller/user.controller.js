const userservices = require('../services/user.services')
const { genSaltSync, hashSync, compareSync } = require('bcrypt')
const { sign } = require('jsonwebtoken')

module.exports = {

    register: async (req, res) => {
        const salt = genSaltSync(10)
        req.body.password = hashSync(req.body.password, salt)
        req.body.rep_password = hashSync(req.body.rep_password, salt)

        const user_data = await userservices.register(
            {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                mobile: req.body.mobile,
                email: req.body.email,
                password: req.body.password,
                rep_password: req.body.rep_password
            })
        if (user_data) {
            res.send(user_data)
        }
        else {
            res.json({
                success: 0,
                message: "Data is not valid"
            })
        }


    },
    showById: async (req, res) => {
        const user_data = await userservices.showById(req.params)
        res.send(user_data)
    },
    deleteByName: async (req, res) => {
        const user_data = await userservices.deleteByName(req.params)
        if (user_data.deletedCount != 0) {
            res.json({
                success: 1,
                message: "Data Deleted"
            })
        }
        else {
            res.json({
                success: 0,
                message: "Name is not matched"
            })
        }
    },
    deleteByUserId: async (req, res) => {
        const user_data = await userservices.deleteByUserId(req.params)
        res.send(user_data)
    },
    updateUser: async (req, res) => {
        const salt = genSaltSync(10)
        req.body.password = hashSync(req.body.password, salt)
        req.body.rep_password = hashSync(req.body.rep_password, salt)

        const user_data = await userservices.updateUser(req.params,
            {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                mobile: req.body.mobile,
                email: req.body.email,
                password: req.body.password,
                rep_password: req.body.rep_password
            })
        res.send(user_data)
    },
    login: async (req, res) => {
        const email = req.body.email
        const password = req.body.password
        const user_data = await userservices.login({ email })
        if (!user_data) {
            res.json({
                success: 0,
                message: "email or password"
            })
        }
        const result = compareSync(password, user_data.password)
        if (result) {
            user_data.password = undefined
            const jsonwebtoken = sign({ result: user_data }, "qwe1234", {
                expiresIn: "1h"
            })
            res.json({
                success: 1,
                message: "Login successfully",
                token: jsonwebtoken
            })
        }
        else {
            res.json({
                success: 0,
                message: "Invalid password"
            })
        }

    },
    showUserData: async (req, res) => {
        const user_data = await userservices.showUserData()
        res.send(user_data)
    }



}

