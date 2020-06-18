const Sequelize = require('sequelize')

const DomainSchema = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    domain: {
        type: Sequelize.STRING,
        allowNull: false
    },
    application_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}

module.exports = DomainSchema
