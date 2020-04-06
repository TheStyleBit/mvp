const UserSchema = require('./schemas/user.schema')
const sequelize = require('../db').getInstance()

const UserModel =  sequelize.define('User', UserSchema)


/**
 * Create new user
 * @param email
 * @param active
 * @param salt
 */
UserModel.registerUser = ({ email, passwordHash, organization, salt }) => {
    const userData = {
        salt,
        email,
        organization: organization || 'StyleBit',
        password: passwordHash,
        roleId: 1
    }

    return UserModel.create(userData)
}

UserModel.getUser = email => {
    const query = {
        where: {
            email
        }
    }
    return UserModel.findOne( query)
}



module.exports = UserModel

