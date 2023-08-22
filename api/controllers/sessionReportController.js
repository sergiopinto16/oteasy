require('dotenv').config()

const SessionReport = require('../models/SessionReportModel')
const mongoose = require('mongoose')
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sendSlackNotification = require('../slackNotifications')

const secret = process.env.SECRET;

// add session report
// app.post('/add',
const addSessionReport = async (req, res) => {

    const { token } = req.cookies;
    jwt.verify(token, secret, {}, async (err, info) => {
        if (err) throw err;

        //const { car_plate, car_km, quantity, price } = req.body;
        const { title, summary, content, cover } = req.body;
        console.log(req.body)

        //TODO - get client id (same in spm report)

        const sessionReportAdd = await SessionReport.create({
            title,
            summary,
            content,
            cover,
            client: "0000",
            author: info.id,
        });
        res.json(sessionReportAdd);
        sendSlackNotification(JSON.stringify(sessionReportAdd), "DB-sessionReport")
    });

    // try {
    //     const gasReportAdd = await Gas.create({
    //         car_plate,
    //         car_km,
    //         quantity,
    //         price,
    //     });
    //     res.json(gasReportAdd);
    // } catch (e) {
    //     console.log(e);
    //     res.status(400).json(e);
    // }


}

// get all Gas Reports
// app.get('/gasReports',
const sessionReports = async (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, secret, {}, async (err, info) => {
        if (err) throw err;

        const sessionReports = await SessionReport.find({}).sort({ createdAt: -1 })
        res.status(200).json(sessionReports)
    });
}



module.exports = {
    addSessionReport,
    sessionReports,
}