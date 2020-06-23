const Sequelize = require('sequelize')

const RuleSchema = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    key: {
        type: Sequelize.STRING,
        allowNull: false
    },
    value: {
        type: Sequelize.JSON,
        allowNull: false
    },
    domainId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'domain_id'
    }
}

module.exports = RuleSchema
