require('dotenv').config()
const express = require('express');
const moment = require('moment');
const {
  checkSuppressTrain,
} = require('./controllers/cpController')

const app = express();

const cpAlert = require('./routes/cp-alert')

const sendSlackNotification = require('./slackNotifications')


let stamp = null;

// Add timestamp 
sendSlackNotification("CP-ALERT start")

// TODO How to connect multiple urls ???
// middleware
app.use(express.json());
// app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

// ???????
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/cp/',cpAlert)



function updateStamp() {
  stamp = moment().format("YYYY/MM/DD HH:mm:ss");
  checkSuppressTrain()
  console.log(stamp)
}

updateStamp();

setInterval(() => {
  updateStamp();
}, 300000);


app.listen(process.env.PORT);
// connect to db

// TODO - if error in mongo db connection execute app.listen
// app.listen(process.env.PORT)



// ??? - list to not close ??
app.listen(4100)

