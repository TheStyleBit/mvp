const Sequelize = require('sequelize')

const DomainSchema = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    domain_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    key: {
        type: Sequelize.STRING,
        allowNull: false
    }
}

module.exports = DomainSchema
