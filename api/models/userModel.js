const mongoose = require('mongoose');
const {Schema, model} = mongoose;


/*
credentials_level

0 - SPM
1 - GAS_REPORT
2 -
3 -
4 -
5 -
6 -
7 -
8 -
9 -
*/

const UserSchema = new Schema({
  username: {type: String, required: true, min: 4, unique: true},
  password: {type: String, required: true},
  credentials_level: {type: [Number], default: [0,0,0,0,0,0,0,0,0,0]}
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;