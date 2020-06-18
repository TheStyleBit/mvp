const router = require('express').Router()
const userApi = require('./user.api')
const ruleApi = require('./rule.api')
const domainApi = require('./domain.api')
const { AuthMiddleware } = require('../middleware')

router.use('/user', userApi)

/**
 * API endpoints with browser authorization.
 */

/* commented out for testing */
// router.use(AuthMiddleware.verifyToken)

router.use('/rule', ruleApi)
router.use('/domain', domainApi)

module.exports = router
