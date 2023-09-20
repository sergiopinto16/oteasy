const express = require('express')
const SPM = require('../models/spmModel')
const {
    addSPM, SPMs,
} = require('../controllers/spmController')

const router = express.Router()


// add spm
router.post('/add', addSPM)

router.post('/spms', SPMs)


module.exports = router

