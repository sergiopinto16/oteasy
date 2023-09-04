const express = require('express')
const SessionReport = require('../models/sessionReportModel')
const {
    addSessionReport,
    sessionReports,
} = require('../controllers/sessionReportController')
const fs = require("fs");
const jwt = require("jsonwebtoken");
const Post = require("../models/postModel");

const router = express.Router()


// add session report
router.post('/add', addSessionReport)


// get sessions
router.get('/sessionReports', sessionReports)


module.exports = router

