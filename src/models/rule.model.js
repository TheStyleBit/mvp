const RuleSchema = require('./schemas/rule.schema')
const sequelize = require('../db').getInstance()

const RuleModel =  sequelize.define('Rule', RuleSchema)
module.exports = RuleModel

