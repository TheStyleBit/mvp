const jwt = require('jsonwebtoken')

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
    }
}

module.exports = auth
