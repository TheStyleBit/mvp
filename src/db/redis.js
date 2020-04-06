
const Redis = require('redis')
const { REDIS } = require('../config/config')
const rdPub = Redis.createClient({
    url: REDIS.URL
})

// TODO test function, to be removed
module.exports.publishRule = rule => {
    const WS_CHANNEL = "channel1"
    rdPub.publish(WS_CHANNEL, JSON.stringify(rule))
}
