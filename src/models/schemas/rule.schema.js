const Sequelize = require('sequelize')

const RuleSchema = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    formula: {
        type: Sequelize.STRING,
        allowNull: false
    },
    applicationId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}

module.exports = RuleSchema
