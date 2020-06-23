const router = require('express').Router()
const { DomainService } = require('../services')
const { AuthMiddleware } = require('../middleware')

/**
 * Create new domain for
 */
router.post('/',
    DomainService.createDomain
)

/**
 * List domains for specified applicationId
 */
router.get('/:id',
    AuthMiddleware.checkOrigin,
    DomainService.getDomain
)

/**
 * delete domain if exists
 * TODO check the owner before deleting, implement after Auth is ready for
 */
router.delete('/:domain',
    DomainService.deleteDomain
)

module.exports = router
