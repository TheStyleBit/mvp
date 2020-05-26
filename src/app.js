const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

// app.use(express.urlencoded({ extended: false }))
// app.use(express.json())

app.use(cors({
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE']
}))

app.use(bodyParser.urlencoded({ limit: '5mb', extended: false }))
app.use(bodyParser.json({ limit: '5mb' }))

const health = require('./api/health.api')
const api = require('./api')

app.use('/health', health)
app.use('/api/v1', api)

// const wss = require('./sockets')
// wss.boot()

module.exports = app
