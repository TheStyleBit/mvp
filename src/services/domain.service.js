const { DomainModel } = require('../models')
const { handleGet, handleFailure, handleCreate, handleDelete } = require('../utils/response-handler')

const DomainService = {
    getDomain: (req, res, next) => {
        const { id } = req.params
        const query = {
            where: {
                applicationId: id
            },
            raw: true
        }

        return DomainModel.findOne(query)
            .then(handleGet(res))
            .catch(handleFailure(res))
    },

    createDomain: (req, res) => {
        const { applicationId = 1, domain } = req.body

        return DomainModel.create( {
            applicationId,
            domain,
        })
            .then(handleCreate(res))
            .catch(handleFailure(res))
    },

    deleteDomain: (req, res) => {
        const { domain } = req.params
        const query = {
            where: {
                domain
            }
        }

        return DomainModel.destroy(query)
            .then(handleDelete(res))
            .catch(handleFailure(res))
    }
}

module.exports = DomainService


