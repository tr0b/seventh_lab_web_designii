const mongoose = require('mongoose');

const { Schema } = mongoose;

const ClientSchema = new Schema({
  name: { type: String, required: true, trim: true },
  age: { type: String, required: true },
});
module.exports = mongoose.model('Client', ClientSchema);
