const { UserModel }  = require('../models')
const crypto  = require('../libs/crypto')
const jwt = require('jsonwebtoken')

const { handleCreate } = require('../utils/response-handler')

const UserService = {
    signUp: (req, res, next) => {
        const { email, password, organization } = req.body

        const salt = crypto.generateSalt()
        const passwordHash = crypto.hashPassword(password, salt)

        return UserModel.getUser(email)
            .then(user => {
                if(!user) {
                    return UserModel.registerUser({
                        email,
                        salt,
                        organization,
                        passwordHash
                    })
                } else {
                    return Promise.reject(new Error(`{user.email} is already exists`))
                }
            })
            // TODO send verification email
            .then(user => handleCreate(res)({ id: user.id }))
            .catch(next)
    },

    signIn: (req, res, next) => {
        const { password, email } = req.body
        return UserModel.getUser(email)
            .then(user => {
                // user can be undefined
                if (user && crypto.hashPassword(password, user.salt) === user.password) {
                    // Create a token
                    const payload = { userId: user.id, roleId: user.roleId }
                    const options = { expiresIn: '5d', issuer: 'stylebit' }
                    const secret = process.env.JWT_SECRET;
                    const token = jwt.sign(payload, secret, options)
                    return handleCreate(res)(token)
                } else {
                    return next(new Error('Incorrect email or password.'))
                }
            })
            .catch(next)
    }
}

module.exports = UserService

