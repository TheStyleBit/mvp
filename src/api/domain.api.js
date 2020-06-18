const router = require('express').Router()
const { DomainService } = require('../services')
const { AuthMiddleware } = require('../middleware')

/**
 * Create new domain for
 */
router.post('/', (req, res) =>
    DomainService.createDomain
)

/**
 * List domains for specified applicationId
 */
router.get('/:id', (req, res, next) =>
    AuthMiddleware.checkOrigin,
    DomainService.getDomain
)

/**
 * delete domain if exists
 * TODO check the owner before deleting, implement after Auth is ready for
 */
router.delete('/:domain', (req, res) =>
    DomainService.deleteDomain
)

module.exports = router
