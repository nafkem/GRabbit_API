// services/recordService.js
const Record = require('../models/Record'); // Assuming you have a Record model

// Create a new rabbit management record
exports.createRecord = async (data) => {
    const record = new Record(data);
    return await record.save();
};

// Fetch all records for a specific user
exports.getRecordsByUser = async (userId) => {
    return await Record.find({ user: userId });
};

// Update a specific record
exports.updateRecord = async (recordId, data) => {
    return await Record.findByIdAndUpdate(recordId, data, { new: true });
};

// Delete a specific record
exports.deleteRecord = async (recordId) => {
    return await Record.findByIdAndDelete(recordId);
};

// Find records with upcoming delivery date for reminders
exports.getRecordsForReminder = async () => {
    const reminderDate = new Date();
    reminderDate.setDate(reminderDate.getDate() + 5); // 5 days before the delivery date
    return await Record.find({ deliveryDate: reminderDate });
};
