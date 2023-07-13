require('dotenv').config()

const Client = require('../models/clientModel')

const mongoose = require('mongoose')
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sendSlackNotification = require('../slackNotifications')


const secret = process.env.SECRET;



// register client
// app.post('/register',
const registerClient = async (req, res) => {

    const { token } = req.cookies;
    jwt.verify(token, secret, {}, async (err, info) => {
        if (err) throw err;

        console.log(req.body)

        const { card_id, name, email, bird_year, bird_month, bird_day, parent_name, contact_number } = req.body;
        console.log(card_id)
        console.log(name)
        console.log(email)
        console.log(parent_name)
        console.log(info)

        //TODO : Check if card_id exist (new user)
        const clientDoc = await Client.findOne({ card_id }).lean();
        console.log(clientDoc)
        if (clientDoc !== null) {
            res.status(400).json('User already exist!');
        }
        else {
            try {
                const clientDoc = await Client.create({
                    card_id,
                    name,
                    email,
                    bird_year, bird_month, bird_day,
                    parent_name, contact_number,
                    doctor: info.id
                });
                res.json(clientDoc);
                sendSlackNotification(JSON.stringify(clientDoc), "DB-clientRegister")
            } catch (e) {
                console.log(e);
                res.status(400).json(e);
            }
        }

    });


}


// get all clients
// app.get('/clients',
const clients = async (req, res) => {
    const clients = await Client.find({}).sort({ createdAt: -1 })
    res.status(200).json(clients)
}



module.exports = {
    registerClient,
    clients
}