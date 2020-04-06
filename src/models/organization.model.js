const OrganizationSchema = require('./schemas/organization.schema')
const sequelize = require('../db').getInstance()

const OrganizationModel =  sequelize.define('Organization', OrganizationSchema)
module.exports = OrganizationModel

