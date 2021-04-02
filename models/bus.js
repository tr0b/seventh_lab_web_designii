const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;
const { Schema } = mongoose;

const BusSchema = new Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  clients: [{ type: ObjectId, ref: 'Client', max: 20 }],
});

BusSchema.pre('save', async function (next) {
  if (this.clients.size > 20) throw ('A maximum of 20 clients are allowed');
  next();
});
module.exports = mongoose.model('Bus', BusSchema);
