const jwt = require('jsonwebtoken')
const { DomainService } = require('../services')

const auth = {
    verifyToken: (req, res, next) => {
        const authorizationHeader = req.headers.authorization
        if (authorizationHeader) {
            return Promise.resolve()
                .then(() => {
                    // remove 'Bearer ' from token
                    const token = req.headers.authorization.split(' ')[1]
                    return jwt.verify(token, process.env.JWT_SECRET)
                })
                .then(decoded => {
                    req.decoded = decoded
                    return next()
                })
                .catch(next)
        } else {
            next(new Error('Authentication error. Token required.'))
        }
    },

    checkOrigin: (req, res, next) => {
        const domain = req.headers.host || req.headers.origin
        const { key } = req.params

        return DomainService.checkDomain(key, domain)
            .then( result => {
                if (result && result[0]) {
                    return next()
                } else {
                    next(new Error('domain or key do not exists'))
                }
            })
            .catch(next)
    }
}

module.exports = auth
