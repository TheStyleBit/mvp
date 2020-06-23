const CONFIG = {
    PG: {
        CONNECTION_URI: process.env.PG_CONNECTION_URI,
        USERNAME: process.env.PG_USERNAME,
        PASSWORD: process.env.PG_PASSWORD,
        DB: process.env.PG_DB,
        HOST: process.env.PG_HOST,
        PORT: process.env.PG_PORT || 5434
    },
    JWT: {
        SECRET: process.env.JWT_SECRET
    }
}

module.exports = CONFIG
