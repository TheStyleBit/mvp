const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')

const { ErrorHandlerMiddleware } = require('./middleware')

/**
 * Middleware which setups the `morgan` logger.
 */
app.use(morgan('dev'))
app.use(helmet())

app.use(cors({
    origin: "*",
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: "*",
    optionsSuccessStatus: 200
}))

app.use(bodyParser.urlencoded({ limit: '5mb', extended: false }))
app.use(bodyParser.json({ limit: '5mb' }))

app.use((req, res, next) => {
    console.log('body', req.body)
    next()
})

const health = require('./api/health.api')
const api = require('./api')

app.use('/health', health)
app.use('/api/v1', api)

/**
 * Error Api
 */
app.use(ErrorHandlerMiddleware)


module.exports = app
