const router = require('express').Router()
const { RuleModel } = require('../models')

const {
    handleCreate,
    handleFailure,
    handleUpdate,
    handleDelete,
    handleGet
} = require('../utils/response-handler')


router.post('/', (req, res) => {
    const { domainId = 1, key, value } = req.body

    return RuleModel.create( {
        domainId,
        key,
        value
    })
    .then(handleCreate(res))
    .catch(handleFailure(res))
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    const query = {
        where: {
            id
        },
        raw: true
    }

    return RuleModel.findOne(query)
        .then(handleGet(res))
        .catch(handleFailure(res))
})

router.patch('/:id', async (req, res) => {
    const { key, value } = req.body
    const { id } = req.params

    const query = {
        where: {
            id
        }
    }

    const rule = await RuleModel.findOne(query)

    if (typeof key !== 'undefined') {
        rule.key = key
    }

    if (typeof value !== 'undefined') {
        rule.value = value
    }

    return rule.save()
        .then(handleUpdate(res))
        .catch(handleFailure(res))
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    const query = {
        where: {
            id
        }
    }

    return RuleModel.destroy(query)
        .then(handleDelete(res))
        .catch(handleFailure(res))
})

module.exports = router
