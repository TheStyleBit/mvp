const url = require('url')
const uuid = require('uuid')
const Redis = require('redis')
const { REDIS } = require('../config/config')

const rdSub = Redis.createClient({
    url: REDIS.URL
})

// send client corresponding messages
// whenever publish event occurs in from admin panel
// see: github.com/thestylebit/admin-bk
const _wsMessageHandler = wss => (channel, message) => {
    // TODO find out better filtering criteria, instead of iterating all socket clients
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN && client.channel === channel) {
            client.send(message)
        }
    })
}

// TODO get rid of hardcode
// TODO split functionality into reasonable modules
const wsConnectionHandler = (ws, req) => {


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
        message.owner = 'server'
        ws.send(JSON.stringify(message))
    })
}

const listenToBroker = wss => rdSub.on("message", _wsMessageHandler(wss))

module.exports = {
    wsConnectionHandler,
    listenToBroker
}