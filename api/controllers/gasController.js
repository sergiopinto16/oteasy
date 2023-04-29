const Gas = require('../models/gasReport')
const mongoose = require('mongoose')
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const salt = bcrypt.genSaltSync(10);
const secret = 'asdfe45we45w345wegw345werjktjwertkj';



// add gas report
// app.post('/add',
const addGasReport = async (req, res) => {

    const { token } = req.cookies;
    jwt.verify(token, secret, {}, async (err, info) => {
        if (err) throw err;

        const { car_plate, car_km, quantity, price } = req.body;
        console.log(req.body)

        const gasReportAdd = await Gas.create({
            car_plate,
            car_km,
            quantity,
            price,
            author: info.id,
        });
        res.json(gasReportAdd);
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
const gasReports = async (req, res) => {
    const gasReports = await Gas.find({}).sort({ createdAt: -1 })
    res.status(200).json(gasReports)
}



module.exports = {
    addGasReport,
    gasReports,
}