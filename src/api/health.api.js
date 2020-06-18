const router = require('express').Router()

router.get('/', (req, res) => {
    res.send(`OK ${process.env.PG_USERNAME}`)
})

module.exports = router