

// models/Record.js
const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    breed: { type: String, required: true },
    rabbitName: { type: String, required: true },
    crossedDate: { type: Date, required: true },
    endDate: { type: Date },
    deliveryDate: { type: Date, required: true },
    kindled: { type: Boolean, default: false },
    reminderSent: { type: Boolean, default: false }
});

module.exports = mongoose.model('Record', recordSchema);
