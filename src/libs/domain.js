const sequelize = require('../db').getInstance()

const checkDomain = (key, domain) => {
    const sql = `
            SELECT D.id, D.domain, D.application_id, K.key FROM "Domains" AS D
            LEFT JOIN "Keys" AS K
            ON D.id=K.domain_id
            WHERE domain=:domain and key=:key
            `

    const query = {
        replacements: {
            domain: domain,
            key: key
        },
        type: sequelize.QueryTypes.SELECT,
        raw: true
    }

    return Promise.resolve().then(() => sequelize.query(sql, query))
}

module.exports = {
    checkDomain
}
