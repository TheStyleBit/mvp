const CONFIG = {
    PG: {
        CONNECTION_URI: process.env.PG_CONNECTION_URI,
        USERNAME: process.env.PG_USERNAME,
        PASSWORD: process.env.PG_PASSWORD,
        DB: process.env.PG_DB,
        HOST: process.env.PG_HOST,
        PORT: process.env.PG_PORT || 5432
    },
    JWT: {
        SECRET: process.env.JWT_SECRET
    },
    REDIS: {
        HOST: process.env.REDIS_HOST,
        PORT: process.env.REDIS_PORT,
        URL: process.env.REDIS_URL || `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
    }
}

module.exports = CONFIG
