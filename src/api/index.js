const router = require('express').Router()
const userApi = require('./user.api')
const ruleApi = require('./rule.api')
const { AuthMiddleware } = require('../middleware')

router.use('/user', userApi)

/**
 * API endpoints with browser authorization.
 */
router.use(AuthMiddleware.verifyToken)

router.use('/rule', ruleApi)

module.exports = router
