const ApplicationSchema = require('./schemas/application.schema')
const sequelize = require('../db').getInstance()

const ApplicationModel =  sequelize.define('Application', ApplicationSchema)
module.exports = ApplicationModel

