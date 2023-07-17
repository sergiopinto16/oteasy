const express = require('express')
const {
    checkSuppressTrain,
} = require('../controllers/cpController')


const router = express.Router()

// check suppress train
router.post('check_suppress_train', checkSuppressTrain)

module.exports = router

