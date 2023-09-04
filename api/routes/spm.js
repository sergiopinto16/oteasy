const express = require('express')
const SPM = require('../models/spmModel')
const {
    addSPM, SPMs,
} = require('../controllers/spmController')
const {clients} = require("../controllers/clientController");

const router = express.Router()



// add spm
router.post('/add',addSPM)

router.get('/spms', SPMs)



module.exports = router

