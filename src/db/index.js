const Sequelize = require('sequelize')
const { PG } = require('../config/config')

const DB = (function () {
    let sequelize = null

    return {
        getInstance: () => {
            if (!sequelize) {
                sequelize = new Sequelize(PG.DB, PG.USERNAME, PG.PASSWORD, {
                    host: PG.HOST,
                    dialect: 'postgres'
                })
            }
            return sequelize
        }
    }
})()

module.exports = DB
