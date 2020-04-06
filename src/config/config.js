const CONFIG = {
    PG: {
        CONNECTION_URI: process.env.PG_CONNECTION_URI,
        USERNAME: process.env.PG_USERNAME,
        PASSWORD: process.env.PG_PASSWORD,
        DB: process.env.PG_DB,
        HOST: process.env.PG_HOST
    },
    JWT: {
        SECRET: process.env.JWT_SECRET
    },
    REDIS: {
        HOST: process.env.REDIS_HOST,
        PORT: process.env.REDIS_PORT,
        URL: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
    }
}

module.exports = CONFIG
