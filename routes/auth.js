const router = require('express').Router()
const login = require('./controllers/authLogin')

router.post('/', login)

module.exports = router
