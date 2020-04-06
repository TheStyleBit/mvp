const PermissionSchema = require('./schemas/permission.schema')
const sequelize = require('../db').getInstance()

const PermissionModel =  sequelize.define('Permission', PermissionSchema)
module.exports = PermissionModel

