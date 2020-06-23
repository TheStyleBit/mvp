const Sequelize = require('sequelize')

const DomainSchema = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    domainId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'domain_id'
    },
    key: {
        type: Sequelize.STRING,
        allowNull: false
    }
}

module.exports = DomainSchema
