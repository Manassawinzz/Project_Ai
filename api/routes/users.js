const express = require('express')
const addUsers = require('../controllers/users.js')

const router = express()

router.use("/",addUsers)

module.exports =  router;