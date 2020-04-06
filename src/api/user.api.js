const router = require('express').Router()
const { UserModel } = require('../models')
const { UserService } = require('../services')

router.post('/signup',
    // TODO check params
    // TODO check email
    UserService.signUp
)

router.post('/signin',
    // TODO check params

    UserService.signIn
)

router.delete('/', (req, res) => {
    return UserModel.delete({ id: 1 })
        .then(() => res.send('deleted'))
})


module.exports = router
