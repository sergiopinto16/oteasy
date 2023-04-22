const User = require('../models/userModel')
const mongoose = require('mongoose')
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const salt = bcrypt.genSaltSync(10);
const secret = 'asdfe45we45w345wegw345werjktjwertkj';



// register user
// app.post('/register',
const registerUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password, salt),
        });
        res.json(userDoc);
    } catch (e) {
        console.log(e);
        res.status(400).json(e);
    }
}


// login user
// app.post('/login',
const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username });
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
        // logged in
        jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json({
                id: userDoc._id,
                username,
            });
        });
    } else {
        res.status(400).json('wrong credentials');
    }
}


// profile User
// app.get('/profile',
const profileUser = (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info);
    });
}


// logout User
// app.post('/logout', 
const logoutUser = (req, res) => {
    res.cookie('token', '').json('ok');
}
















/*

// get all users
const getUsers = async (req,res) => {
    const users = await User.find({}).sort({createAt: -1})

    res.status(200).json(users)
}

// get a single user
const getUser = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }
    const workout = await User.findById(id)

    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }
    res.status(200).json(workout)
}



// create new user
const createUser = async (req,res) => {
    const {title,load,reps} = req.body
    //add to db
    try{
        const workout = await User.create({title,load,reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(404).json({error: error.message})
    }

}

// delete a user
const deleteUser = async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await User.findOneAndDelete({_id: id})
    
    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }


    res.status(200).json(workout)

}


// update a user
const updateUser = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await User.findOneAndUpdate({_id: id}, {
        ...req.body
    })


    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)

}


module.exports = {
    getUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser
}

*/



module.exports = {
    registerUser,
    loginUser,
    profileUser,
    logoutUser
}