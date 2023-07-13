const express = require('express')
const Client = require('../models/clientModel')
const {
    registerClient,
    clients,
} = require('../controllers/clientController')


const router = express.Router()


// register client
router.post('/register', registerClient)

// profile Client
router.get('/clients', clients)


module.exports = router

