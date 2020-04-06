const RoleSchema = require('./schemas/role.schema')
const sequelize = require('../db').getInstance()

const RoleModel =  sequelize.define('Role', RoleSchema)
module.exports = RoleModel

