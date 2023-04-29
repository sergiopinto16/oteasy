const express = require('express')
const SPM = require('../models/spmModel')
const {
    addSPM,
} = require('../controllers/spmController')

const router = express.Router()



// add spm
router.post('/add',addSPM)


// profile User
// router.get('/gasReports',gasReports)


module.exports = router

