const crypto = require('crypto')

const generateSalt = () => {
    return crypto.randomBytes(64).toString('hex').substr(0, 64)
}

const hashPassword = (password, salt) => {
    return crypto.createHmac('sha256', salt).update(password).digest('hex')
}

module.exports = {
    generateSalt,
    hashPassword
}
