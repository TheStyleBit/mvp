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
    applicationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'application_id'
    }
}

module.exports = DomainSchema
