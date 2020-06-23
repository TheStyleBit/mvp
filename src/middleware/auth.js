const jwt = require('jsonwebtoken')
const { checkDomain } = require('../libs/domain')

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
        const { key } = req.query

        console.log('domain: ', domain)
        console.log('key: ', key)

        return checkDomain(key, domain)
            .then(result => {
                console.log('result: ', result)
                if (!result || !result[0]) {
                    return next(new Error('invalid domain or key'))
                }
                next()
            })
            .catch(next)
    }
}

module.exports = auth
