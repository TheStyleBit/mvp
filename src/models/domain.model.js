const DomainSchema = require('./schemas/domain.schema')
const sequelize = require('../db').getInstance()

const DomainModel =  sequelize.define('Domain', DomainSchema)
module.exports = DomainModel

