const sequelize = require('../db').getInstance()
const { DomainModel } = require('../models')
const { handleGet, handleFailure, handleCreate, handleDelete } = require('../utils/response-handler')

const DomainService = {
    checkDomain: (req, res, next) => {
        const sql = `
            SELECT * FROM "Domain" AS D
            LEFT JOIN "Keys" AS K
            ON D.id=K.domain_id
            WHERE domain=:domain and key=:key
            `

        const query = {
            replacements: {
                domain: domain,
                key: key
            },
            type: sequelize.QueryTypes.SELECT,
            raw: true
        }

        return sequelize.query(sql, query)
            .then(result => {
                if (result && result[0]) {
                    return next()
                } else  {
                    return next(new Error('invalid domain or key'))
                }
            })
            .catch(next)
    },

    getDomain: (req, res, next) => {
        const { id } = req.params
        const query = {
            where: {
                applicationId: id
            },
            raw: true
        }

        return DomainModel.find(query)
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


