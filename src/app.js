const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const health = require('./api/health.api')
const api = require('./api')

app.use('/health', health)
app.use('/api/v1', api)

// const wss = require('./sockets')
// wss.boot()

module.exports = app
