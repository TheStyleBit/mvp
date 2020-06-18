const KeySchema = require('./schemas/key.schema')
const sequelize = require('../db').getInstance()

const KeyModel =  sequelize.define('Key', KeySchema)
module.exports = KeyModel
