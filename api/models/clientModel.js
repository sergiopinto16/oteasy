const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const ClientSchema = new Schema({
  card_id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, min: 4 },
  bird_year: { type: Number, required: true },
  bird_month: { type: Number, required: true },
  bird_day: { type: Number, required: true },
  parent_name: { type: String },
  contact_number: { type: Number },
  doctor: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true,
});

const ClientModel = model('Client', ClientSchema);

module.exports = ClientModel;