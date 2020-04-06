const router = require('express').Router()
const { RuleModel } = require('../models')
const { handleCreate } = require('../utils/response-handler')
const { publishRule } = require('../db/redis')

router.post('/', (req, res) => {
    const { applicationId, name, formula } = req.body

    return RuleModel.create( {
        applicationId,
        name,
        formula
    })
    .then(handleCreate(res))
    // .then(() => publishRule({ name, formula }))
})

router.get('/', (req, res) => {

})

router.put('/', (req, res) => {

})

router.delete('/', (req, res) => {

})

module.exports = router
