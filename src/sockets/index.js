const WebSocket = require("ws")
const Redis = require('redis')
const url = require('url')
const uuid = require('uuid')
const { REDIS } = require('../config/config')

const wss = new WebSocket.Server({ port: 8080 })

const rdSub = Redis.createClient({
    url: REDIS.URL
})

// TODO get rid of hardcode
// TODO split functionality into reasonable modules

// every time client connects function is invoked
wss.on("connection", (ws, req) => {
    ws.uuid = uuid.v4()
    const params = url.parse(req.url, true)

    // should be applicationId and map with specified channel
    const { id }  = params.query
    if(id) {
        ws.channel = id
        // TODO check if already subscribed based on according redis key
        rdSub.subscribe(id)
    }

    // test interface to echo back socket's client message
    ws.on("message", data => {
        const message = JSON.parse(data)
        ws.send(JSON.stringify(message))
    })
})

// send client corresponding messages
// whenever publish event occurs in from admin panel
// see: github.com/thestylebit/admin-bk
rdSub.on("message", (channel, message) => {
    // TODO find out better filtering criteria, instead of iterating all socket clients
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN && client.channel === channel) {
            client.send(message)
        }
    })
})

module.exports = wss