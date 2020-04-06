const WebSocket = require("ws")

const { wsConnectionHandler, listenToBroker }  = require('./handlers')

const wss = (function () {
    let wss = null

    return {
        boot: () => {
            if (!wss) {
                wss = new WebSocket.Server({ port: 8080 })

                wss.on("connection", wsConnectionHandler)
                listenToBroker(wss)
            }
            return wss
        }
    }
})()

module.exports = wss